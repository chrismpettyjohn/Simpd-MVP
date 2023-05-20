import gql from "graphql-tag";
import { MESSAGE_FRAGMENT, MessageFragment } from "graphql/fragments/message.fragment";

export interface MessageFetchManyQueryVariables {
  ids?: number[];
}

export interface MessageFetchManyQueryResponse {
  messages: MessageFragment[];
}

export const MESSAGE_FETCH_MANY_QUERY = gql`
  ${MESSAGE_FRAGMENT}
  query($ids: [Float!]) {
    messages(
      filter: {
        ids: $ids
      }
    ) {
      ...MessageFragment
    }
  }
`