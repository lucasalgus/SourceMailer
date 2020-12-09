import React from "react";
import styled from "styled-components";

type PropsType = {
	children: any;
	maxHeight?: string;
};

const RowDiv = styled.div`
	display: flex;
	flex: 1;
	position: relative;
	box-sizing: border-box;
`;

export default function Row(props: PropsType) {
	return (
		<RowDiv style={{ maxHeight: props.maxHeight ?? "initial" }} {...props} />
	);
}
