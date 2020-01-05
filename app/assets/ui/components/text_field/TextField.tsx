import * as React from "react";

import "./TextField.css";

type PropsType = {
	placeholder: string;
	id: string;
	label: string;
}

const TextField = (props: PropsType) => (
	<div className="textField">
		<input
			type="text"
			id={props.id}
			className={`textField-input`}
			placeholder={props.placeholder}
		/>
		<label
			htmlFor={props.id}
			className="textField-label"
		>{props.label}</label>
	</div>
);

export default TextField;