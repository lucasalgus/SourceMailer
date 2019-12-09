import * as React from "react";
import * as ReactDOM from "react-dom";

import "./utils/css/index.css";
import "./utils/css/reset.css";
import "./App.css";

const App = () => {
	return (
		<div>
			<div className="app-bar">SourceMailer</div>
			<div className="app">

			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
