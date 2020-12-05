import React from "react";

import Container from "../components/container";
import Row from "../components/row";
import TextField from "../components/textField";
import Button from "../components/button";

export default function Main() {
	return (
		<Container padding="15px">
			<Row>
				<TextField />
			</Row>
			<Row>
				<p>Editor placeholder</p>
			</Row>
			<Row>
				<Button
					onClick={() => {
						self.open(`file://${__dirname}/settings.html`);
					}}
				>
					Settings
				</Button>
				<Button>Toggle Code</Button>
				<Button>Export HTML</Button>
				<Button>Open File</Button>
				<Button>Send</Button>
			</Row>
		</Container>
	);
}
