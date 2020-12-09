import React, { ChangeEvent } from "react";
import styled from "styled-components";

type PropsType = {
	label: string;
	options: string[];
	value: string;
	name: string;
	onChange: (value?: string) => void;
};

const StyledSpan = styled.span`
	display: block;
	font-family: "Open Sans";
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 5px;
`;
const StyledLabel = styled.label`
	display: flex;
	justify-content: start;
	margin-bottom: 5px;
`;
const StyledInput = styled.input`
	display: none;

	&:checked + i::after {
		transform: translate(-50%, -50%) scale(1);
	}
`;

const StyledIcon = styled.i`
	position: relative;
	display: inline-block;
	margin-right: 5px;
	height: 16px;
	width: 16px;
	background-color: #f5f5f5;
	border-radius: 50%;
	box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;

	&::after {
		position: absolute;
		display: block;
		content: "";
		width: 8px;
		height: 8px;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		background-color: #000;
		transform: translate(-50%, -50%) scale(0);
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
	}
`;
const StyledRadioText = styled.span`
	font-size: 13px;
	font-family: "Open Sans";
	font-weight: 600;
`;

export default function RadioGroup(props: PropsType) {
	function onChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target.dataset;
		props.onChange(value);
	}

	const options = props.options.map((option) => {
		return (
			<StyledLabel>
				<StyledInput
					type="radio"
					name={props.name}
					data-value={option}
					checked={option === props.value}
					onChange={onChange}
				/>
				<StyledIcon />
				<StyledRadioText>{option}</StyledRadioText>
			</StyledLabel>
		);
	});

	return (
		<div>
			<StyledSpan>{props.label}</StyledSpan>
			{options}
		</div>
	);
}
