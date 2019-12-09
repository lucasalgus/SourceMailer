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
	resolve: {
		extensions: [".js", ".ts", ".tsx", ".css"],
	},
	target: "electron-renderer",
	output: {
		filename: "ui.js",
		path: path.resolve(__dirname, "app/static")
	},
	module: {
		rules: [
			{
				test: /\.tsx/, loader: "ts-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: "./app/assets/ui/index.html"
	})]
};

module.exports = [
	APP_CONFIG,
	UI_CONFIG
]