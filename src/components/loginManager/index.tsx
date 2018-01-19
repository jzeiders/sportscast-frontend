import { LoginManager } from "./loginManager";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Auth from "../../auth/auth";

const createUpdateUser = gql`
  mutation createUpdateUser {
    createUpdateUser {
      id
    }
  }
`;
type InputProps = {
  auth: Auth;
};

export default graphql<any, InputProps>(createUpdateUser)(LoginManager);
