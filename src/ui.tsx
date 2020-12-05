import React from "react";
import ReactDOM from "react-dom";

import Main from "./windows/main";
import Settings from "./windows/settings";

const mainEl = document.getElementById("main");
const settingsEl = document.getElementById("settings");

if (mainEl) {
	ReactDOM.render(<Main />, mainEl);
} else {
	ReactDOM.render(<Settings />, settingsEl);
}
