import React, { useState } from "react";

import { retrieveSettings } from "../utils/localStorage";
import { Message } from "../types/message";

import Container from "../components/container";
import Row from "../components/row";
import TextField from "../components/textField";
import Button from "../components/button";

const { ipcRenderer } = window.require("electron");

export default function Main() {
	const [recipients, setRecipients] = useState<string[]>([]);
	const [subject, setSubject] = useState("");

	function openSettings() {
		self.open(`file://${__dirname}/settings.html`);
	}

	function sendMail() {
		const settings = retrieveSettings();
		const message: Message = {
			recipients,
			subject: "test",
			html: "<h1>test</h1>",
		};

		if (!settings) {
			openSettings();
		}

		ipcRenderer.send("send-mail", { settings, message });
	}

	return (
		<Container padding="15px">
			<Row>
				<TextField
					placeholder="To"
					id="recipients"
					name="recipients"
					value={recipients}
					onChange={(event: any) =>
						setRecipients(
							event.target.value.split(",").map((i: string) => i.trim())
						)
					}
				/>
			</Row>
			<Row>
				<TextField
					placeholder="Subject"
					id="subject"
					name="subject"
					value={subject}
					onChange={(event: any) => setSubject(event.target.value)}
				/>
			</Row>
			<Row>
				<p>Editor placeholder</p>
			</Row>
			<Row>
				<Button onClick={openSettings}>Settings</Button>
				<Button>Toggle Code</Button>
				<Button>Export HTML</Button>
				<Button>Open File</Button>
				<Button onClick={sendMail}>Send</Button>
			</Row>
		</Container>
	);
}
