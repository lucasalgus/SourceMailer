const path = require("path");

const APP_CONFIG = {
	entry: path.resolve(__dirname, "src/app.ts"),
	target: "electron-main",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "app.js",
	},
	module: {
		rules: [{ test: /\.ts/, loader: "ts-loader" }],
	},
};

const UI_CONFIG = {
	entry: path.resolve(__dirname, "src/ui.tsx"),
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
	},
	target: "electron-renderer",
	output: {
		path: path.resolve(__dirname, "public/static"),
		filename: "ui.js",
	},
	module: {
		rules: [
			{
				test: /\.tsx/,
				loader: "ts-loader",
			},
		],
	},
};

module.exports = [APP_CONFIG, UI_CONFIG];
