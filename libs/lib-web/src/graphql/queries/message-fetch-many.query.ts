import gql from "graphql-tag";
import { MESSAGE_FRAGMENT, MessageFragment } from "../fragments/message.fragment";

export interface MessageFetchManyQueryInput {
  ids?: number[];
  receivingProfileID?: number;
}

export interface MessageFetchManyQueryVariables {
  filter: MessageFetchManyQueryInput;
}

export interface MessageFetchManyQueryResponse {
  messages: MessageFragment[];
}

export const MESSAGE_FETCH_MANY_QUERY = gql`
  ${MESSAGE_FRAGMENT}
  query($filter: MessageFilterByManyInput!) {
    messages(
      filter: $filter
    ) {
      ...MessageFragment
    }
  }
`