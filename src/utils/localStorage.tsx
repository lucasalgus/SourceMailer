import { ManualSettings } from "../types/emailSettings";

export function saveSettings(settings: ManualSettings) {
	localStorage.setItem("settings", JSON.stringify(settings));
}

export function retrieveSettings() {
	const settings = localStorage.getItem("settings");

	if (settings) {
		return JSON.parse(settings) as ManualSettings;
	}

	return null;
}
