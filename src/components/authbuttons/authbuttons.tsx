import * as React from "react";
import styled from "styled-components";
import * as auth0 from "auth0-js";

type Props = {};

const AuthButton = styled.button`
	height: 20px;
	width: 60px;
	margin-left: 5px;
	color: white;
	background: none;
	box-shadow: none;
	border-radius: 2px;
	border: 1px solid white;
	outline: none;
`;

export class LoginButton extends React.Component<Props, {}> {
	auth0 = new auth0.WebAuth({
		domain: "sports-cast.auth0.com",
		clientID: "2VoChwCg8rPmarq4MjwT2lsd47xkBbw1",
		redirectUri: "http://localhost:3000/login-callback",
		audience: "https://sports-cast.auth0.com/userinfo",
		responseType: "token id_token",
		scope: "openid profile"
	});
	constructor(props: Props) {
		super(props);
	}

	login() {
		this.auth0.authorize();
	}
	render() {
		return <AuthButton onClick={() => this.login()}> Login </AuthButton>;
	}
}
export class RegisterButton extends React.Component<Props, {}> {
	render() {
		return <AuthButton> Register </AuthButton>;
	}
}
