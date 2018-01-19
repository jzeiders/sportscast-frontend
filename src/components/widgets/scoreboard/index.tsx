import { Scoreboard } from "./scoreboard";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const TeamFragment = gql`
  fragment TeamFragment on Team {
    name
    color
    logo
    abbreviation
    Record {
      wins
      losses
    }
  }
`;

const ScoreboardQuery = gql`
  query ScoreboardForGame($id: String!) {
    Game(id: $id) {
      HomeTeam {
        ...TeamFragment
      }
      AwayTeam {
        ...TeamFragment
      }
      time
      location
      date
      homeScore
      awayScore
      Quarters {
        number
        awayScore
        homeScore
      }
    }
  }
  ${TeamFragment}
`;
type InputProps = {
  gameId: string;
};

const ScoreBoardWithData = graphql<any, InputProps>(ScoreboardQuery, {
  options: ({ gameId }) => ({ variables: { id: gameId } })
})(Scoreboard);

export default ScoreBoardWithData;
