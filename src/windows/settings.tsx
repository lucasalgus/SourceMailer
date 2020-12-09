import React, { FormEvent, useEffect, useState } from "react";

import { retrieveSettings, saveSettings } from "../utils/localStorage";

import Container from "../components/container";
import Spacer from "../components/spacer";
import Row from "../components/row";
import Title from "../components/title";
import TextField from "../components/textField";
import RadioGroup from "../components/radioGroup";
import Button from "../components/button";
import validateEmail from "../utils/validateEmail";

export default function Settings() {
	const [user, setUser] = useState<string>("");
	const [pass, setPass] = useState<string>("");
	const [host, setHost] = useState<string>("");
	const [secure, setSecure] = useState(true);
	const [valid, setValid] = useState(false);

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

	useEffect(() => {
		let valid = true;

		if (!validateEmail(user)) {
			valid = false;
		}

		if (!pass) {
			valid = false;
		}

		if (!host) {
			valid = false;
		}

		setValid(valid);
	});

	return (
		<form onSubmit={onSubmitSettings}>
			<Container padding="15px">
				<Row maxHeight="32px">
					<Title>Settings</Title>
				</Row>
				<Row maxHeight="32px">
					<TextField
						label="Email"
						id="user"
						name="user"
						value={user}
						onChange={(event: any) => setUser(event.target.value)}
					/>
				</Row>
				<Row maxHeight="32px">
					<TextField
						label="Password"
						type="password"
						id="pass"
						name="pass"
						value={pass}
						onChange={(event: any) => setPass(event.target.value)}
					/>
				</Row>
				<Row maxHeight="32px">
					<TextField
						label="Host"
						placeholder="smtp.gmail.com"
						id="host"
						name="host"
						value={host}
						onChange={(event: any) => setHost(event.target.value)}
					/>
				</Row>
				<Row>
					<RadioGroup
						label="SSL"
						name="secure"
						options={["Yes", "No"]}
						value={secure ? "Yes" : "No"}
						onChange={(value: string) => setSecure(value === "Yes")}
					/>
				</Row>
				<Row maxHeight="32px">
					<Spacer size="flex" />
					<Button type="button" onClick={closeSettingsPage}>
						Close
					</Button>
					<Spacer size="15px" />
					<Button disabled={!valid} type="submit">
						Save
					</Button>
				</Row>
			</Container>
		</form>
	);
}
