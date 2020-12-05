import React from "react";
import Button from "../components/button";

import Container from "../components/container";
import Row from "../components/row";
import Title from "../components/title";
import TextField from "../components/textField";

export default function Settings() {
	const closeSettingsPage = () => {
		window.close();
	};

	return (
		<Container padding="20px">
			<Row>
				<Title>Settings</Title>
			</Row>
			<Row>
				<TextField />
			</Row>
			<Row>
				<TextField />
			</Row>
			<Row>
				<TextField />
			</Row>
			<Row>
				<TextField />
			</Row>
			<Row>
				<TextField />
			</Row>
			<Row>
				<Button onClick={closeSettingsPage}>Close</Button>
				<Button>Save</Button>
			</Row>
		</Container>
	);
}
