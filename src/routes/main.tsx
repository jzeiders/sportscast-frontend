import * as React from "react";
import MainView from "../components/mainview";
import Header from "../components/header/header";
import Auth from "../auth/auth";

type Props = {
  auth: Auth;
};

export default class Main extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <Header auth={this.props.auth} />
        <MainView />
      </div>
    );
  }
}
