import * as React from "react";
import "./App.css";
import Widget from "./components/widget/widget";
import Grid from "./components/grid/grid";
// import gql from "graphql-tag";
// import { graphql } from "react-apollo";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Grid>
					<Widget>
						<div>Widget A </div>
					</Widget>
					<Widget>
						<div>Widget B </div>
					</Widget>
					<Widget>
						<div>Widget C </div>
					</Widget>
					<Widget>
						<div>Widget D </div>
					</Widget>
				</Grid>
			</div>
		);
	}
}

export default App;
