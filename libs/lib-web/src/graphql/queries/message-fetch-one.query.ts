import gql from "graphql-tag";
import { MESSAGE_FRAGMENT, MessageFragment } from "../fragments/message.fragment";


export interface MessageFetchOneQueryVariables {
  id: number[];
}

export interface MessageFetchOneQueryResponse {
  message: MessageFragment;
}

export const MESSAGE_FETCH_ONE_QUERY = gql`
  ${MESSAGE_FRAGMENT}
  query($id: Float) {
    message(
      filter: {
        id: $id
      }
    ) {
      ...MessageFragment
    }
  }
`