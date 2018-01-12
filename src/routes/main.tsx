import * as React from "react";
import MainView from "../components/mainview";
import Header from "../components/header/header";

export default class Main extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<Header />
				<MainView />
			</div>
		);
	}
}
