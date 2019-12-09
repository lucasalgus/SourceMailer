import { app, BrowserWindow } from "electron";

const createWindow = () => {
	const window = new BrowserWindow({
		title: "SourceMailer",
		titleBarStyle: "hidden",
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	window.loadFile('./index.html');
}

app.on('ready', createWindow);