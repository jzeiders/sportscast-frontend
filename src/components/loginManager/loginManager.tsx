import * as React from "react";
import { Redirect } from "react-router";
import { ChildProps } from "react-apollo";
import Auth from "../../auth/auth";
type LoginManagerProps = {
  auth: Auth;
};

type Props = ChildProps<LoginManagerProps, any>;

export class LoginManager extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.parseStoreUser();
  }
  parseStoreUser() {
    let createUpdateUser = this.createUpdateUser.bind(this);
    this.props.auth.handleAuthentication().then(createUpdateUser);
  }
  createUpdateUser() {
    this.props.mutate({});
  }
  render() {
    return <Redirect to="/" />;
  }
}
