const path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

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
	target: "electron-renderer",
	resolve: {
		extensions: [".js", ".ts", ".tsx", ".css", ".ttf"],
	},
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
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.ttf$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [new MonacoWebpackPlugin()],
};

module.exports = [APP_CONFIG, UI_CONFIG];
