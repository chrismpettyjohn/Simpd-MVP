import { GRAPHQL_URL } from "./app.constant";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";


export const graphqlClient = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});