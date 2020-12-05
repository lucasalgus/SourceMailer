import React, { ComponentProps } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	font-size: 19px;
`;

export default function Button(props: ComponentProps<typeof StyledButton>) {
	return <StyledButton {...props}></StyledButton>;
}
