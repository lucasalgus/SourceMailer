import React, { HTMLProps } from "react";

export default function TextField(props: HTMLProps<HTMLInputElement>) {
	return <input {...props} />;
}
