import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { ApolloProvider } from "react-apollo";
// import { SubscriptionClient } from "subscriptions-transport-ws";
import { ApolloLink } from "apollo-link";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
// import { WebSocketLink } from "apollo-link-ws";

const GRAPHQL_ENDPOINT = "sportscast-189523.appspot.com/graphql";

// const WS_GRAPHQL_ENDPOINT = "ws://" + GRAPHQL_ENDPOINT;
const HTTP_GRAPHQL_ENDPOINT = "http://" + GRAPHQL_ENDPOINT;

const httpLink = createHttpLink({
	uri: HTTP_GRAPHQL_ENDPOINT
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("idToken");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : null
		}
	};
});

const link = ApolloLink.from([
	// wsLink,
	authLink,
	httpLink
]);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root") as HTMLElement
);
registerServiceWorker();
