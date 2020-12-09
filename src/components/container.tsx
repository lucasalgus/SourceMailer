import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type PropsType = {
	padding?: string;
};

const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	box-sizing: border-box;

	> div:not(:last-child) {
		margin-bottom: 10px;
	}
`;

export default function Container(props: PropsWithChildren<PropsType>) {
	return (
		<ContainerDiv
			style={{
				padding: props.padding,
			}}
		>
			{props.children}
		</ContainerDiv>
	);
}
