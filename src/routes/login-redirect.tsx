import * as React from "react";
import { Redirect } from "react-router-dom";
type Props = {};

export default class LoginRedirect extends React.Component<{}, {}> {
	constructor(props: Props) {
		super(props);
		let hash = window.location.hash.substring(1);
		this.parseStoreHash(hash);
		this.state = {
			hash
		};
	}
	parseStoreHash(hash: string) {
		let accessRegex = /(access_token=)(.*?)&/;
		let idRegex = /(id_token=)(.*)/;
		let accessToken = accessRegex.exec(hash);
		let idToken = idRegex.exec(hash);
		if (accessToken != null && idToken != null) {
			localStorage.setItem("accessToken", accessToken[2]);
			localStorage.setItem("idToken", idToken[2]);
			this.setState({
				accessToken: accessToken[1],
				idToken: idToken[1]
			});
		}
	}
	render() {
		return <Redirect to="/" />;
	}
}
