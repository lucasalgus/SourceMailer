import { app, BrowserWindow } from "electron";

const createWindow = () => {
	const window = new BrowserWindow({
		title: "SourceMailer",
		titleBarStyle: "hidden",
		minWidth: 800,
		minHeight: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	window.loadFile('./index.html');
}

app.on('ready', createWindow);