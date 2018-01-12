import { MainView } from "./mainview";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const MainViewQuery = gql`
	{
		Teams {
			name
			division
			Games {
				location
			}
		}
	}
`;

const MainViewWithData = graphql(MainViewQuery)(MainView);

export default MainViewWithData;
