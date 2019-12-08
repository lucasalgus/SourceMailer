const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const APP_CONFIG = {
	mode: "development",
	entry: "./app/assets/index.ts",
	target: "electron-main",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "app/static")
	},
	module: {
		rules: [{ test: /\.tsx/, loader: "ts-loader" }]
	}
};

const UI_CONFIG = {
	mode: "development",
	entry: "./app/assets/ui/app.tsx",
	target: "electron-renderer",
	output: {
		filename: "ui.js",
		path: path.resolve(__dirname, "app/static")
	},
	module: {
		rules: [{ test: /\.tsx/, loader: "ts-loader" }]
	},
	plugins: [new HtmlWebpackPlugin({
		template: "./app/assets/ui/index.html"
	})]
};

module.exports = [
	APP_CONFIG,
	UI_CONFIG
]