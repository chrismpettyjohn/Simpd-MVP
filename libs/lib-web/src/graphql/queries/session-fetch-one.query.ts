import gql from "graphql-tag";
import { SESSION_FRAGMENT, SessionFragment } from "../fragments/session.fragment";

export interface SessionFetchOneInput {
  id: number;
}

export interface SessionFetchOneQueryVariables {
  filter: SessionFetchOneInput;
}

export interface SessionFetchOneQueryResponse {
  session: SessionFragment;
};

export const SESSION_FETCH_ONE_QUERY = gql`
  ${SESSION_FRAGMENT}
  query($filter: SessionFilterByOneInput!) {
    session(
      filter: $filter
    ) {
      ...SessionFragment
    }
  }
`