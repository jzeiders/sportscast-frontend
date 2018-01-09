import * as React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	height: 40px;
	width: 100%;
	box-sizing: border-box;
	position: relative;
	background-color: #e53935;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px 10px;
`;

const Title = styled.div`
	font-size: 18px;
	font-weight: bold;
	color: white;
`;

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
const Spacer = styled.div`
	flex-grow: 1;
`;

const LoginButton = AuthButton.extend``;
const SignUpButton = AuthButton.extend``;
export default class Header extends React.Component {
	render() {
		return (
			<HeaderContainer>
				<Title> SPORTS CAST</Title>
				<Spacer />
				<LoginButton> Login </LoginButton>
				<SignUpButton> Register </SignUpButton>
			</HeaderContainer>
		);
	}
}
