import * as React from "react";

import { ChildProps } from "react-apollo";
import styled from "styled-components";
import Selection from "../selection";
// import { Scoreboard } from "../widgets/scoreboard/scoreboard";
// import { UpcomingGame } from "../widgets/upcomingGame/upcomingGame";
import Grid from "../grid/grid";
import Widget from "../widget/widget";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const GridContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	@media (min-width: 400px) {
		width: 400px;
	}
	@media (min-width: 700px) {
		width: 700px;
	}
	@media (min-width: 1000px) {
		width: 1000px;
	}
	@media (min-width: 1300px) {
		width: 1300px;
	}
`;

type MainViewProps = {
	data: Response;
};
type Response = {};

export class MainView extends React.Component<
	ChildProps<MainViewProps, Response>,
	{}
> {
	constructor(props: ChildProps<MainViewProps, Response>) {
		super(props);
	}
	getWidgets() {
		return <Widget />;
	}
	render() {
		return (
			<Container>
				<GridContainer>
					{/* <Selection /> */}
					<Grid>{this.getWidgets()}</Grid>
				</GridContainer>
				<Selection />
			</Container>
		);
	}
}
