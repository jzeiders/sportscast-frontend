import * as React from "react";
import styled from "styled-components";
import { LoginButton, RegisterButton } from "../authbuttons/authbuttons";
import Auth from "../../auth/auth";

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
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

type Props = {
  auth: Auth;
};

export default class Header extends React.Component<Props, {}> {
  render() {
    return (
      <HeaderContainer>
        <Title> SPORTS CAST</Title>
        <Spacer />
        <LoginButton login={this.props.auth.login} />
        <RegisterButton login={this.props.auth.login} />
      </HeaderContainer>
    );
  }
}
