import React from "react";

type PropsType = {
	size: string;
};

export default function Spacer(props: PropsType) {
	const fixedDiv = (
		<div
			style={{
				width: props.size,
			}}
		/>
	);
	const flexDiv = (
		<div
			style={{
				display: "flex",
				flex: "1",
			}}
		/>
	);

	return props.size === "flex" ? flexDiv : fixedDiv;
}
