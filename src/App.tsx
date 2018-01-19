import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./routes/main";
import LoginRedirect from "./routes/login-redirect";
import Auth from "./auth/auth";

const auth = new Auth();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route
              exact={true}
              path="/"
              component={() => <Main auth={auth} />}
            />
            <Route
              path="/login-callback"
              component={() => <LoginRedirect auth={auth} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
