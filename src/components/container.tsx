import React, { PropsWithChildren } from "react";

type PropsType = {
	padding?: string;
};

export default function Container(props: PropsWithChildren<PropsType>) {
	return (
		<div
			style={{
				padding: props.padding,
				display: "flex",
				flexDirection: "column",
			}}
		>
			{props.children}
		</div>
	);
}
