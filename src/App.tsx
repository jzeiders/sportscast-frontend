import * as React from "react";
// import Widget from "./components/widget/widget";
import Grid from "./components/grid/grid";
import Header from "./components/header/header";
// import Schedule from "./modules/schedule/schedule";
// import Login from "./components/login/login";
import styled from "styled-components";
// import Selection from "./components/selection/selection";
import { Scoreboard } from "./components/modules/scoreboard/scoreboard";
// import gql from "graphql-tag";
// import { graphql } from "react-apollo";
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

const HomeTeam = {
	name: "Celtics",
	score: 94,
	logo: "http://via.placeholder.com/50x50",
	record: {
		wins: 27,
		losses: 13
	},
	color: "rgb(0,130,72)"
};
const AwayTeam = {
	name: "Bulls",
	score: 47,
	logo: "http://via.placeholder.com/50x50",
	record: {
		wins: 0,
		losses: 13
	},
	color: "f00"
};
const BoxScore = {
	homeTeam: [13, 12, 32, 0],
	awayTeam: [13, 10, 3, 0]
};
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Container>
					<GridContainer>
						{/* <Selection /> */}
						<Grid>
							<Scoreboard
								homeTeam={HomeTeam}
								awayTeam={AwayTeam}
								boxScore={BoxScore}
								quarter="2nd"
								clock="8:32"
								location="TD Garden"
							/>
						</Grid>
					</GridContainer>
				</Container>
			</div>
		);
	}
}

export default App;
