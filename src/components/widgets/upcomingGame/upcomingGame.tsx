import * as React from "react";
import Widget from "../../widget/widget";
import styled from "styled-components";

type Props = {
	homeTeam: Team;
	awayTeam: Team;
	date: string;
	location: string;
	time: string;
};
type Team = {
	name: string;
	logo: string;
	record: Record;
	color: string;
};

type Record = {
	wins: number;
	losses: number;
};

const Header = styled.div`
	height: 35px;
	color: white;
	font-size: 24px;
	font-weight: bold;
	background-color: ${(props: any) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 5px;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		margin-bottom: 10px;
	}
`;

const DateContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	font-weight: bold;
	margin: 10px 0;
`;
const GameContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 30px;
	font-weight: bold;
`;

const LocationContainer = styled.div`
	color: grey;
	font-size: 20px;
`;

const Logo = ({ logo, record }: { logo: string; record: Record }) => (
	<LogoContainer>
		<img src={logo} />
		<div>
			<span> {record.wins} </span> - <span> {record.losses} </span>
		</div>
	</LogoContainer>
);

export class UpcomingGame extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		let { homeTeam, awayTeam, location, time, date } = this.props;
		return (
			<Widget>
				<Header color={homeTeam.color}>
					<span>
						{homeTeam.name} vs. {awayTeam.name}
					</span>
				</Header>
				<DateContainer>{date}</DateContainer>
				<GameContainer>
					<Logo logo={homeTeam.logo} record={homeTeam.record} />
					<InfoContainer>
						{time}
						<LocationContainer>{location}</LocationContainer>
					</InfoContainer>
					<Logo logo={awayTeam.logo} record={awayTeam.record} />
				</GameContainer>
			</Widget>
		);
	}
}
