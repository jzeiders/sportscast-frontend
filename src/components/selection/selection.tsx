import * as React from "react";
import styled from "styled-components";
import Widget from "../widget/widget";
import { ChildProps } from "react-apollo";

type SelectElementProps = {
	team: Team;
};

type Team = {
	name: string;
	logo: string;
	division: string;
};
const SelectElementContainer = styled.div`
	width: 250px;
	height: 56px;
	box-sizing: border-box;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Checkbox = styled.div`
	position: relative;
	outline: 0;
	label {
		cursor: pointer;
		&:before,
		&:after {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
		}

		&:before {
			// box
			width: 20px;
			height: 20px;
			background: #fff;
			border: 2px solid rgba(0, 0, 0, 0.54);
			border-radius: 2px;
			cursor: pointer;
			transition: background 0.3s;
		}
		&:checked {
			background-color: rgb(51, 122, 183);
		}
	}
	&:checked {
		+ label:before {
			background: $md-checkbox-checked-color;
			border: none;
		}
		+ label:after {
			transform: rotate(-45deg);

			top: 3px;
			left: 2px;
			width: 20px;
			height: 10px;

			border: 2px solid #fff;
			border-top-style: none;
			border-right-style: none;
		}
	}
`;

class SelectElement extends React.Component<SelectElementProps, {}> {
	render() {
		return (
			<SelectElementContainer>
				<Checkbox>
					<input id="check{this.props.key}" type="checkbox" />
					<label htmlFor="check{this.props.key}"> {this.props.team.name}</label>
				</Checkbox>
				<img src={this.props.team.logo} />
			</SelectElementContainer>
		);
	}
}

const Header = styled.div`
	color: white;
	font-weight: bold;
	font-size: 18px;
	height: 40px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #e53935;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24), 0 3px 6px rgba(0, 0, 0, 0.16);
`;
const ConferencesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 250px;
	@media (min-width: 800px) {
		width: 500px;
	}
`;
const ConferenceContainer = styled.div`
	width: 250px;
	height: 100%;
`;

const ConferenceHeader = styled.div`
	width: 100%;
	height: 30px;
	font-size: 16px;
	background-color: #4a4a4a;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24), 0 1px 3px rgba(0, 0, 0, 0.16);
`;

const Conference = ({ teams, name }: { teams: Team[]; name: string }) => (
	<ConferenceContainer>
		<ConferenceHeader> {name} Conference </ConferenceHeader>
		{teams.map((team, i) => <SelectElement key={i} team={team} />)}
	</ConferenceContainer>
);

type Response = {
	Teams: Team[];
	loading: boolean;
};

type SelectionProps = {
	data: Response;
};

export class Selection extends React.Component<
	ChildProps<SelectionProps, Response>,
	{}
> {
	constructor(props: ChildProps<SelectionProps, Response>) {
		super(props);
	}
	getWesternTeams(): Team[] {
		let Teams = this.props.data.Teams != null ? this.props.data.Teams : [];
		return Teams.filter(team => team.division === "West");
	}
	getEasternTeams(): Team[] {
		let Teams = this.props.data.Teams != null ? this.props.data.Teams : [];
		return Teams.filter(team => team.division === "East");
	}
	render() {
		return this.props.data.Teams ? (
			<Widget>
				<Header> Select Teams </Header>
				<ConferencesContainer>
					<Conference name="Eastern" teams={this.getEasternTeams()} />
					<Conference name="Western" teams={this.getWesternTeams()} />
				</ConferencesContainer>
			</Widget>
		) : null;
	}
}
