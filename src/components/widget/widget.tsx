import * as React from "react";
import styled from "styled-components";

const WidgetContainer = styled.div`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	margin-bottom: 10px;
`;
export default class Widget extends React.Component {
	render() {
		return <WidgetContainer>{this.props.children}</WidgetContainer>;
	}
}
