import { ManualSettings } from "../types/emailSettings";
import { MainData } from "../types/mainData";

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

export function saveMainData(mainData: MainData) {
	localStorage.setItem("mainData", JSON.stringify(mainData));
}

export function retrieveMainData() {
	const mainData = localStorage.getItem("mainData");

	if (mainData) {
		return JSON.parse(mainData) as MainData;
	}

	return null;
}
