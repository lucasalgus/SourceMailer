import React, { FormEvent, useEffect, useState } from "react";

import { retrieveSettings, saveSettings } from "../utils/localStorage";

import Container from "../components/container";
import Button from "../components/button";
import Row from "../components/row";
import Title from "../components/title";
import TextField from "../components/textField";

export default function Settings() {
	const [user, setUser] = useState<string>("");
	const [pass, setPass] = useState<string>("");
	const [host, setHost] = useState<string>("");
	const [secure, setSecure] = useState<boolean>(true);

	function closeSettingsPage() {
		window.close();
	}

	function onSubmitSettings(event: FormEvent) {
		event.preventDefault();

		saveSettings({
			host,
			secure,
			auth: {
				user,
				pass,
			},
		});

		closeSettingsPage();
	}

	useEffect(() => {
		const settings = retrieveSettings();

		if (!settings) {
			return;
		}

		setUser(settings.auth.user);
		setPass(settings.auth.pass);
		setHost(settings.host);
		setSecure(settings.secure);
	}, []);

	return (
		<form onSubmit={onSubmitSettings}>
			<Container padding="20px">
				<Row>
					<Title>Settings</Title>
				</Row>
				<Row>
					<TextField
						placeholder="Email"
						id="user"
						name="user"
						value={user}
						onChange={(event: any) => setUser(event.target.value)}
					/>
				</Row>
				<Row>
					<TextField
						placeholder="Password"
						type="password"
						id="pass"
						name="pass"
						value={pass}
						onChange={(event: any) => setPass(event.target.value)}
					/>
				</Row>
				<Row>
					<TextField
						placeholder="Host"
						id="host"
						name="host"
						value={host}
						onChange={(event: any) => setHost(event.target.value)}
					/>
				</Row>
				<Row>
					<Button type="button" onClick={closeSettingsPage}>
						Close
					</Button>
					<Button type="submit">Save</Button>
				</Row>
			</Container>
		</form>
	);
}
