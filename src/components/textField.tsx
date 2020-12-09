import React, { HTMLProps } from "react";
import styled from "styled-components";

type PropsType = {
	label: string;
} & HTMLProps<HTMLInputElement>;

const StyledLabel = styled.label`
	display: flex;
	font-family: "Open Sans";
	font-weight: 600;
	font-size: 13px;
	width: 100%;
	padding: 0 15px;
	align-items: center;
	border-radius: 8px;
	box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.25);
`;
const StyledSpan = styled.span`
	margin-right: 10px;
`;
const StyledInput = styled.input`
	width: 100%;
	border: 0;
	outline: 0;
`;

export default function TextField(props: PropsType) {
	return (
		<StyledLabel htmlFor={props.id}>
			<StyledSpan>{props.label}</StyledSpan>
			<StyledInput {...(props as any)} />
		</StyledLabel>
	);
}
