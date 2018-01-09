import * as React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const ColumnContainer = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column; 
	* {
		padding
	}
`;

export default class Grid extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			height: 0,
			width: 0
		};
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", () => this.updateWindowDimensions());
	}

	componentWillUnmount() {
		window.removeEventListener("resize", () => this.updateWindowDimensions());
	}
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	placeChildren() {
		let colNum = Math.floor(this.state.width / 400);
		let out = [];
		let { children } = this.props;
		let childArray = React.Children.toArray(children);
		for (let i = 0; i < colNum; i++) {
			out.push(
				<ColumnContainer>
					{childArray.filter((child, num) => {
						let col = num % colNum;
						return col === i;
					})}
				</ColumnContainer>
			);
		}
		return out;
	}
	render() {
		return <GridContainer>{this.placeChildren()}</GridContainer>;
	}
}
interface Props {}
interface State {
	width: number;
	height: number;
}
