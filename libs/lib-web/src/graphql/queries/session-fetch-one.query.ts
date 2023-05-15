import gql from "graphql-tag";
import { SESSION_FRAGMENT, SessionFragment } from "graphql/fragments/session.fragment";

export interface SessionFetchOneQueryVariables {
  id: number;
}

export interface SessionFetchOneQueryResponse {
  session: SessionFragment;
};

export const SESSION_FETCH_ONE_QUERY = gql`
  ${SESSION_FRAGMENT}
  query($sessionID: Number!) {
    session(
      filters: {
        id: $sessionID
      }
    ) {
      ...SessionFragment
    }
  }
`