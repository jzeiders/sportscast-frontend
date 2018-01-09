import * as React from "react";
// import styled from "styled-components";
import * as auth0 from "auth0-js";

type Props = {};

export default class Login extends React.Component<Props, {}> {
	auth0 = new auth0.WebAuth({
		domain: "sports-cast.auth0.com",
		clientID: "2VoChwCg8rPmarq4MjwT2lsd47xkBbw1",
		redirectUri: "http://localhost:3000",
		audience: "https://sports-cast.auth0.com/userinfo",
		responseType: "token id_token",
		scope: "openid"
	});
	constructor(props: Props) {
		super(props);
	}

	login() {
		this.auth0.authorize();
	}
	render() {
		return <div> Login </div>;
	}
}
