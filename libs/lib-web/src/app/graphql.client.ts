import { GRAPHQL_URL, LOCAL_STORAGE_SESSION_TOKEN } from "./app.constant";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const bearerToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
  return {
    headers: {
      ...headers,
      Authorization: bearerToken ? `Bearer ${bearerToken}` : "",
    }
  }
});

export const graphqlClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});