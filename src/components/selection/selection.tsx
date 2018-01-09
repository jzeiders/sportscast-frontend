import * as React from "react";
import styled from "styled-components";

const ElementContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 50px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Right = styled.div`
	width: 100px;
	padding-left: 10px;
`;
const Left = styled.div`
	width: 150px;
`;
const Checkbox = styled.input``;

type SelectElementProps = {
	name: string;
};

class SelectElement extends React.Component<SelectElementProps, {}> {
	render() {
		return (
			<ElementContainer>
				<Right>
					<Checkbox type="checkbox" />
				</Right>
				<Left>{this.props.name}</Left>
			</ElementContainer>
		);
	}
}

type SelectionProps = {};

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const Center = styled.div`
	width: 100%;
	text-align: center;
`;

export default class Selection extends React.Component<SelectionProps, any> {
	constructor(props: SelectionProps) {
		super(props);
	}
	getTeams() {
		return [
			{ name: "Celtics", division: "east" },
			{ name: "Bulls", division: "east" },
			{ name: "Warriors", division: "west" }
		];
	}

	render() {
		let teams = this.getTeams();
		return (
			<Container>
				<div>
					<ElementContainer>
						{" "}
						<Center> East </Center>{" "}
					</ElementContainer>

					{teams
						.filter(team => team.division === "east")
						.map((team, i) => <SelectElement key={i} name={team.name} />)}
				</div>
				<div>
					<ElementContainer>
						{" "}
						<Center>West </Center>
					</ElementContainer>
					{teams
						.filter(team => team.division === "west")
						.map((team, i) => <SelectElement key={i} name={team.name} />)}
				</div>
				<div>Next</div>
			</Container>
		);
	}
}
