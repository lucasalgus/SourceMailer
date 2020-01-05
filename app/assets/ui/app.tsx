import * as React from "react";
import * as ReactDOM from "react-dom";

import Button from "./components/button/Button";

import "./utils/css/index.css";
import "./utils/css/reset.css";
import "./App.css";
import TextField from './components/text_field/TextField';

const App = () => {
	return (
		<div>
			<div className="app-bar">SourceMailer</div>
			<div className="app">
				<TextField id="test" label="Test" placeholder="Enter the e-mail addresses of your recipients" />
				<Button type="secondary" onClick={() => console.log("hey")}>hey</Button>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
