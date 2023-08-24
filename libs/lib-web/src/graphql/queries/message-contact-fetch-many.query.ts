import gql from "graphql-tag";
import { MESSAGE_CONTACT_FRAGMENT, MessageContactFragment } from "../../graphql/fragments/message-contact.fragment";

export interface MessageContactFetchManyQueryResponse {
  messageContacts: MessageContactFragment[];
}

export const MESSAGE_CONTACT_FETCH_MANY_QUERY = gql`
  ${MESSAGE_CONTACT_FRAGMENT}
  query {
    messageContacts {
      ...MessageContactFragment
    }
  }
`