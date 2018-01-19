import * as React from "react";
import Widget from "../../widget/widget";
import styled from "styled-components";
import { ChildProps } from "react-apollo";

type ScoreboardProps = {
  data: Response;
  gameId: string;
};
type Props = ChildProps<ScoreboardProps, Response>;

type Response = {
  loading: boolean;
  Game: {
    HomeTeam: Team;
    AwayTeam: Team;
    location: string;
    clock: string;
    quarter: string;
    homeScore: number;
    awayScore: number;
    Quarters: [Quarter];
  };
};
type Quarter = {
  number: number;
  awayScore: number;
  homeScore: number;
};

type Team = {
  name: string;
  abbreviation: number;
  color: string;
  logo: string;
  Record: Record;
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
    if (this.props.data.loading) return null;

    let {
      HomeTeam,
      AwayTeam,
      location,
      clock,
      quarter,
      homeScore,
      awayScore,
      Quarters
    } = this.props.data.Game;
    return (
      <Widget>
        <Header color={HomeTeam.color}>
          <span>{HomeTeam.name} </span> <span> {AwayTeam.name}</span>
        </Header>
        <MainContainer>
          <Logo logo={HomeTeam.logo} record={HomeTeam.Record} />
          <ScoreContianer>
            <ScoreContainerTop>
              {homeScore}
              <ClockContainer>
                <div>{quarter} </div> <div>{clock}</div>
              </ClockContainer>
              {awayScore}
            </ScoreContainerTop>
            <div>{location}</div>
          </ScoreContianer>
          <Logo logo={AwayTeam.logo} record={AwayTeam.Record} />
        </MainContainer>
        <BoxScoreContainer>
          <BoxTitleColumn>
            <div>{HomeTeam.name}</div>
            <div>{AwayTeam.name}</div>
          </BoxTitleColumn>
          {Quarters.map((v, i) => (
            <BoxScoreColumn>
              <BoxScoreColumnHeader>{i}</BoxScoreColumnHeader>
              <div>{v.homeScore}</div>
              <div>{v.awayScore}</div>
            </BoxScoreColumn>
          ))}
          <BoxScoreColumn>
            <BoxScoreColumnHeader>T</BoxScoreColumnHeader>
            <div>{homeScore}</div>
            <div>{awayScore}</div>
          </BoxScoreColumn>
        </BoxScoreContainer>
      </Widget>
    );
  }
}
