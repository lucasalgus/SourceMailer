import React, { useEffect, useRef, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import styled from "styled-components";

type PropsType = {
	showCode: boolean;
};

const EditorContainer = styled.div`
	width: 100%;
`;

export default function EmailViewer(props: PropsType) {
	const editorContainerRef = useRef<HTMLDivElement>();
	const [editorWidth, setEditorWidth] = useState<number>();
	const [editorHeight, setEditorHeight] = useState<number>();

	useEffect(() => {
		const { width, height } =
			editorContainerRef.current?.getBoundingClientRect() ?? {};

		setEditorWidth(width);
		setEditorHeight(height);

		const callback = () => {
			setEditorWidth(0);
			setEditorHeight(0);

			window.requestAnimationFrame(() => {
				const { width, height } =
					editorContainerRef.current?.getBoundingClientRect() ?? {};
				setEditorWidth(width);
				setEditorHeight(height);
			});
		};

		window.addEventListener("resize", callback);

		return () => window.removeEventListener("resize", callback);
	}, []);

	return props.showCode ? (
		<EditorContainer ref={editorContainerRef as any}>
			<MonacoEditor
				width={editorWidth}
				height={editorHeight}
				language="html"
				theme="vs-light"
				value={"test"}
			/>
		</EditorContainer>
	) : (
		<div dangerouslySetInnerHTML={{ __html: "<h1>Test</h1>" }} />
	);
}
