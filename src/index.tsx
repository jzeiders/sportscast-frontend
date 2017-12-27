import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { ApolloProvider } from "react-apollo";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { ApolloLink } from "apollo-link";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";

const GRAPHQL_ENDPOINT = "localhost:4000/graphql";

const WS_GRAPHQL_ENDPOINT = "ws://" + GRAPHQL_ENDPOINT;
const HTTP_GRAPHQL_ENDPOINT = "http://" + GRAPHQL_ENDPOINT;

const subscriptionClient = new SubscriptionClient(WS_GRAPHQL_ENDPOINT, {
	reconnect: true
});

const wsLink = new WebSocketLink(subscriptionClient);

const link = ApolloLink.from([
	wsLink,
	new HttpLink({ uri: HTTP_GRAPHQL_ENDPOINT })
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
