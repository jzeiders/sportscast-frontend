import * as React from "react";
import LoginManager from "../components/loginManager";
import Auth from "../auth/auth";
type Props = {
  auth: Auth;
};

export default class LoginRedirect extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <LoginManager auth={this.props.auth} />;
  }
}
