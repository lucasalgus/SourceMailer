import React, { ComponentProps } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: #f5f5f5;
	border: 0;
	padding: 8px 20px;
	font-size: 13px;
	font-family: "Open Sans";
	font-weight: 600;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
	transition: all 0.2s;
	outline: 0;

	&:hover {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
		transform: translateY(-2px);
	}

	&:active {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		transform: translateY(0);
	}

	&:disabled {
		background-color: #dddddd;
		color: #9b9b9b;
		box-shadow: 0 0 0 #fff;
	}
	&:disabled:hover {
		transform: none;
	}
`;

export default function Button(props: ComponentProps<typeof StyledButton>) {
	return <StyledButton {...props} />;
}
