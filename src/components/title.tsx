import React from "react";
import styled from "styled-components";

type PropsType = {
	children: string;
};

const StyledH1 = styled.h1`
	font-size: 19px;
`;

export default function Title(props: PropsType) {
	return <StyledH1>{props.children}</StyledH1>;
}
