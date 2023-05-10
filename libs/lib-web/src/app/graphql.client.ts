import { GRAPHQL_URL } from './app.constant';
import { from, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

export const graphqlClient = from([
  new RetryLink(),
  new HttpLink({ uri: GRAPHQL_URL })
]);