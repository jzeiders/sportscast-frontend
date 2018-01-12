import * as React from "react";
import Widget from "../../widget/widget";
import styled from "styled-components";

type Props = {
	homeTeam: Team;
	awayTeam: Team;
	location: string;
	clock: string;
	quarter: string;
	boxScore: BoxScore;
};
type BoxScore = {
	homeTeam: number[];
	awayTeam: number[];
};

type Team = {
	name: string;
	score: number;
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
	justify-content: space-between;
	align-items: center;
	padding: 0 5px;
`;

const MainContainer = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 10px;
	justify-content: space-around;
`;
const ScoreContianer = styled.div`
	display: flex;
	flex-direction: column;
	justify-conent: space-between;
	padding-top: 8px;
	font-size: 24px;
	font-weight: bold;
`;
const ScoreContainerTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 500;
	font-size: 32px;
`;
const ClockContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 14px;
	color: #9b9b9b;
`;
const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		margin-bottom: 10px;
	}
`;
const BoxScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 12px;
	box-sizing: border-box;
	border-top: 1px solid grey;
	padding: 10px 10px 0 0;
	margin: 10px 20px;
`;
const BoxTitleColumn = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	margin-top: 24px;
	width: 50px;
	* {
		margin-bottom: 10px;
	}
`;
const BoxScoreColumn = styled.div`
	display: flex;
	font-weight: 100;
	width: 45px;
	align-items: flex-end;
	flex-direction: column;
	* {
		margin-bottom: 10px;
	}
`;
const BoxScoreColumnHeader = styled.div`
	font-weight: bold;
`;

const Logo = ({ logo, record }: { logo: string; record: Record }) => (
	<LogoContainer>
		<img src={logo} />
		<div>
			<span> {record.wins} </span> - <span> {record.losses} </span>
		</div>
	</LogoContainer>
);

export class Scoreboard extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		let { homeTeam, awayTeam, location, clock, quarter, boxScore } = this.props;
		return (
			<Widget>
				<Header color={homeTeam.color}>
					<span>{homeTeam.name} </span> <span> {awayTeam.name}</span>
				</Header>
				<MainContainer>
					<Logo logo={homeTeam.logo} record={homeTeam.record} />
					<ScoreContianer>
						<ScoreContainerTop>
							{homeTeam.score}
							<ClockContainer>
								<div>{quarter} </div> <div>{clock}</div>
							</ClockContainer>
							{awayTeam.score}
						</ScoreContainerTop>
						<div>{location}</div>
					</ScoreContianer>
					<Logo logo={awayTeam.logo} record={awayTeam.record} />
				</MainContainer>
				<BoxScoreContainer>
					<BoxTitleColumn>
						<div>{homeTeam.name}</div>
						<div>{awayTeam.name}</div>
					</BoxTitleColumn>
					{[1, 2, 3, 4].map(i => (
						<BoxScoreColumn>
							<BoxScoreColumnHeader>{i}</BoxScoreColumnHeader>
							<div>{boxScore.homeTeam[i - 1]}</div>
							<div>{boxScore.awayTeam[i - 1]}</div>
						</BoxScoreColumn>
					))}
					<BoxScoreColumn>
						<BoxScoreColumnHeader>T</BoxScoreColumnHeader>
						<div>{homeTeam.score}</div>
						<div>{awayTeam.score}</div>
					</BoxScoreColumn>
				</BoxScoreContainer>
			</Widget>
		);
	}
}
