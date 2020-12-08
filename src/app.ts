import { app, BrowserWindow, ipcMain } from "electron";
import nodemailer from "nodemailer";

import { ManualSettings } from "./types/emailSettings";
import { Message } from "./types/message";

function openMainWindow() {
	const main = new BrowserWindow({
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
			options.width = 500;
			options.height = 400;
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
			subject: `[SourceMailer] ${message.subject}`,
			html: message.html,
		},
		(error: any, info: any) => {
			console.log(error);
			console.log(info);
		}
	);
}

ipcMain.on("send-mail", (_, args) => {
	const { message, settings } = args;

	sendMail(message, settings);
});

app.on("ready", openMainWindow);
