import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./routes/main";
import LoginRedirect from "./routes/login-redirect";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<Route exact={true} path="/" component={Main} />
						<Route path="/login-callback" component={LoginRedirect} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
