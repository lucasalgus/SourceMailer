import React from "react";
import styled from "styled-components";

type PropsType = {
	children: any;
	maxHeight?: string;
};

export default function Row(props: PropsType) {
	const RowDiv = styled.div`
		display: flex;
		position: relative;
		flex: 1;
		max-height: ${props.maxHeight ?? "initial"};
		background-color: blue;
	`;

	return <RowDiv>{props.children}</RowDiv>;
}
