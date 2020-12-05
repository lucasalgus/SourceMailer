import { app, BrowserWindow } from "electron";

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
			options.modal = true;
		}
	);
}

app.on("ready", openMainWindow);
