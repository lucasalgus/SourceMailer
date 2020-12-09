import React, { useState } from "react";

import { retrieveSettings } from "../utils/localStorage";
import { Message } from "../types/message";

import Container from "../components/container";
import Row from "../components/row";
import TextField from "../components/textField";
import Button from "../components/button";
import EmailViewer from "../components/emailViewer";

const { ipcRenderer } = window.require("electron");

export default function Main() {
	const [recipients, setRecipients] = useState<string[]>([]);
	const [subject, setSubject] = useState("");
	const [showCode, setShowCode] = useState(true);

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
		<Container padding="15px" rowSpacing="20px">
			<Row maxHeight="32px">
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
			<Row maxHeight="32px">
				<TextField
					placeholder="Subject"
					id="subject"
					name="subject"
					value={subject}
					onChange={(event: any) => setSubject(event.target.value)}
				/>
			</Row>
			<Row>
				<EmailViewer showCode={showCode} />
			</Row>
			<Row maxHeight="32px">
				<Button onClick={openSettings}>Settings</Button>
				<Button onClick={() => setShowCode(!showCode)}>Toggle Code</Button>
				<Button>Export HTML</Button>
				<Button>Open File</Button>
				<Button onClick={sendMail}>Send</Button>
			</Row>
		</Container>
	);
}
