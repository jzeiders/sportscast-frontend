import * as React from "react";
import Widget from "../../widget/widget";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";

type Props = {
	data: Response;
};
type Response = {
	Teams: Team[];
};
type Team = {
	name: string;
	Games: Game[];
	teamId: string;
};
type Game = {
	location: string;
};

export class Schedule extends React.Component<ChildProps<Props, Response>, {}> {
	constructor(props: ChildProps<Props, Response>) {
		super(props);
	}
	render() {
		return (
			<Widget>
				<div> Schedule </div>
				{JSON.stringify(this.props.data)}
			</Widget>
		);
	}
}

const TeamSchedules = gql`
	query TeamSchedules($teamID: string) {
		Team(teamID: $teamID) {
			Games {
				location
			}
		}
	}
`;
const withScheduleData = graphql<Response>(TeamSchedules, {
	options: ({ teamID }) => ({
		variables: { teamID }
	})
});

export default withScheduleData(Schedule);
