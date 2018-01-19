import * as React from "react";
import styled from "styled-components";

type Props = {
  login: Function;
};

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
  render() {
    return <AuthButton onClick={() => this.props.login()}> Login </AuthButton>;
  }
}
export class RegisterButton extends React.Component<Props, {}> {
  render() {
    return <AuthButton> Register </AuthButton>;
  }
}
