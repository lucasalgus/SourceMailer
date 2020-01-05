import * as React from "react";

import "./Button.css";

type PropsType = {
	children: string;
	type: "primary" | "secondary";
	onClick: () => void;
};

const Button = (props: PropsType) => (
	<button
		className={`button -${props.type}`}
		onClick={props.onClick}
	>{props.children}</button>
);

export default Button;