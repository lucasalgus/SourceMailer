import React, { useEffect, useState } from "react";

import {
	retrieveMainData,
	retrieveSettings,
	saveMainData,
} from "../utils/localStorage";
import validateEmail from "../utils/validateEmail";

import { Message } from "../types/message";
import { MainData } from "../types/mainData";

import Container from "../components/container";
import Spacer from "../components/spacer";
import Row from "../components/row";
import TextField from "../components/textField";
import Button from "../components/button";
import EmailViewer from "../components/emailViewer";

const { ipcRenderer } = window.require("electron");

export default function Main() {
	const [recipients, setRecipients] = useState<string>("");
	const [subject, setSubject] = useState("");
	const [html, setHTML] = useState<string>("");
	const [showCode, setShowCode] = useState(true);
	const [valid, setValid] = useState(false);
	const [sending, setSending] = useState(false);

	function openSettings() {
		self.open(`file://${__dirname}/settings.html`);
	}

	function exportHTML() {
		ipcRenderer.send("save-file", html);
	}

	async function openFile() {
		ipcRenderer.send("open-file");
		ipcRenderer.on("open-file-done", (_, text) => {
			setHTML(text);
		});
	}

	function sendMail() {
		const settings = retrieveSettings();
		const recipientsArray = recipients.split(",").map((r) => r.trim());

		const message: Message = {
			recipients: recipientsArray,
			subject,
			html,
		};

		if (!settings) {
			openSettings();
			return;
		}

		ipcRenderer.send("send-mail", { settings, message });
		setSending(true);

		ipcRenderer.on("send-mail-done", () => {
			setSending(false);
		});
	}

	// On mount
	useEffect(() => {
		const data = retrieveMainData();

		if (!data) {
			return;
		}

		setRecipients(data.recipients);
		setSubject(data.subject);
		setHTML(data.html);
	}, []);

	// On change
	useEffect(() => {
		const data = {
			recipients,
			subject,
			html,
		} as MainData;

		saveMainData(data);
	}, [recipients, subject, html]);

	// Validations
	useEffect(() => {
		let valid = true;

		if (recipients.split(",").length === 0) {
			valid = false;
		}

		recipients.split(",").forEach((r) => {
			if (!validateEmail(r)) {
				valid = false;
			}
		});

		setValid(valid);
	});

	return (
		<Container padding="15px">
			<Row maxHeight="32px">
				<TextField
					label="To"
					placeholder="example@email.com, example2@email.com"
					id="recipients"
					name="recipients"
					value={recipients}
					onChange={(event: any) => {
						setRecipients(event.target.value);
						event.target.focus();
					}}
				/>
			</Row>
			<Row maxHeight="32px">
				<TextField
					label="Subject"
					id="subject"
					name="subject"
					value={subject}
					onChange={(event: any) => setSubject(event.target.value)}
				/>
			</Row>
			<Row>
				<EmailViewer showCode={showCode} html={html} setHTML={setHTML} />
			</Row>
			<Row maxHeight="32px">
				<Button onClick={openSettings}>Settings</Button>
				<Spacer size="15px" />
				<Button onClick={() => setShowCode(!showCode)}>Toggle Code</Button>
				<Spacer size="flex" />
				<Button onClick={exportHTML}>Export HTML</Button>
				<Spacer size="15px" />
				<Button onClick={openFile}>Open File</Button>
				<Spacer size="15px" />
				{sending ? (
					<Button disabled={true}>Sending...</Button>
				) : (
					<Button disabled={!valid} onClick={sendMail}>
						Send
					</Button>
				)}
			</Row>
		</Container>
	);
}
