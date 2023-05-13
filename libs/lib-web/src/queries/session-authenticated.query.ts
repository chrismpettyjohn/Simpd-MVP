import gql from "graphql-tag";
import { SESSION_FRAGMENT, SessionFragment } from "fragments/session.fragment";

export type SessionAuthenticatedQueryResponse = SessionFragment;

export const SESSION_AUTHENTICATED_QUERY = gql`
  ${SESSION_FRAGMENT}
  query {
    me {
      ...SessionFragment
    }
  }
`