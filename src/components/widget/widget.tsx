import * as React from "react";
import styled from "styled-components";

const WidgetContainer = styled.div`
	border: 1px solid black;
`;
export default class Widget extends React.Component {
	render() {
		return <WidgetContainer>{this.props.children}</WidgetContainer>;
	}
}
