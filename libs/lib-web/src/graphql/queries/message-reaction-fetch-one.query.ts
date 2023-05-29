import gql from "graphql-tag";
import { MESSAGE_REACTION_FRAGMENT, MessageReactionFragment } from "graphql/fragments/message-reaction.fragment";

export interface MessageReactionFetchOneInput {
  id?: number;
  messageID?: number;
}

export interface MessageReactionFetchOneQueryVariables {
  filter: MessageReactionFetchOneInput;
}

export interface MessageReactionFetchOneQueryResponse {
  messageReaction: MessageReactionFragment;
}

export const MESSAGE_REACTION_FETCH_ONE_QUERY = gql`
  ${MESSAGE_REACTION_FRAGMENT}
  query($filter: MessageReactionFilterInput!) {
    messageReaction(
      filter: $filter
    ) {
      ...MessageReactionFragment
    }
  }
`