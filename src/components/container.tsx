import React, { PropsWithChildren, Children } from "react";
import styled from "styled-components";

type PropsType = {
	padding?: string;
	rowSpacing?: string;
};

export default function Container(props: PropsWithChildren<PropsType>) {
	const heightOffset =
		(Children.count(props.children) - 2) * parseInt(props.rowSpacing ?? "0");

	const ContainerDiv = styled.div`
		display: flex;
		flex-direction: column;
		height: calc(100vh - ${heightOffset}px);
		background-color: red;

		> div:not(:last-child) {
			margin-bottom: ${props.rowSpacing ?? "0px"};
		}
	`;

	return (
		<ContainerDiv style={{ padding: props.padding }}>
			{props.children}
		</ContainerDiv>
	);
}
