import { Selection } from "./selection";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const TeamsQuery = gql`
	{
		Teams {
			name
			division
			teamID
		}
	}
`;

const SelectionWithData = graphql(TeamsQuery)(Selection);

export default SelectionWithData;
