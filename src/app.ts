import fs from "fs";
import nodemailer from "nodemailer";
import { app, BrowserWindow, dialog, ipcMain } from "electron";

import { ManualSettings } from "./types/emailSettings";
import { Message } from "./types/message";

let main: BrowserWindow;

function openMainWindow() {
	main = new BrowserWindow({
		minWidth: 800,
		minHeight: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	main.loadFile("main.html");
	main.webContents.on(
		"new-window",
		(_event, _url, _frameName, _disposition, options, _additionalFeatures) => {
			options.resizable = false;
			options.width = 350;
			options.height = 350;
			options.parent = main;
			options.center = true;
		}
	);
}

function sendMail(message: Message, settings: ManualSettings) {
	const transporter = nodemailer.createTransport(settings);

	transporter.sendMail(
		{
			from: settings.auth.user,
			to: message.recipients,
			subject: message.subject || "Your SourceMailer email",
			html: message.html,
		},
		(error) => {
			if (error) {
				dialog.showErrorBox("An error occured", error.message);
				return;
			}

			dialog.showMessageBox(main, {
				title: "Email sent",
				message: "Your email was sent succesfully!",
			});
		}
	);
}

ipcMain.on("save-file", async (_, html) => {
	try {
		const result = await dialog.showSaveDialog({
			title: "Export HTML file...",
			securityScopedBookmarks: true,
			filters: [
				{
					name: "HTML File",
					extensions: ["html"],
				},
			],
		});

		const path = result.filePath;
		if (!path) {
			return;
		}

		fs.writeFile(path, html, (error) => {
			if (error) {
				dialog.showErrorBox("An error occured", error.message);
			}
		});
	} catch {
		// the cancel button was clicked
	}
});

ipcMain.on("open-file", async () => {
	const result = await dialog.showOpenDialog({
		title: "Open HTML file...",
		filters: [{ name: "HTML File", extensions: ["html"] }],
		properties: ["openFile"],
		securityScopedBookmarks: true,
	});

	const path = result.filePaths[0];
	if (!path) {
		return;
	}

	fs.readFile(path, "utf8", (error, data) => {
		if (error) {
			dialog.showErrorBox("An error occured", error.message);
		}

		main.webContents.send("open-file-done", data.toString());
	});
});

ipcMain.on("send-mail", (_, args) => {
	const { message, settings } = args;

	sendMail(message, settings);
});

app.on("ready", openMainWindow);
