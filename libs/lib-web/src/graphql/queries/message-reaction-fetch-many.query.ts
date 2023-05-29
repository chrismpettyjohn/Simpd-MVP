import gql from "graphql-tag";
import { MESSAGE_REACTION_FRAGMENT, MessageReactionFragment } from "graphql/fragments/message-reaction.fragment";

export interface MessageReactionFetchManyInput {
  ids?: number[];
  messageIDs?: number[];
}

export interface MessageReactionFetchManyQueryVariables {
  filter: MessageReactionFetchManyInput;
}

export interface MessageReactionFetchManyQueryResponse {
  messageReactions: MessageReactionFragment[];
}

export const MESSAGE_REACTION_FETCH_MANY_QUERY = gql`
  ${MESSAGE_REACTION_FRAGMENT}
  query($filter: MessageReactionFilterInput!) {
    messageReactions(
      filter: $filter
    ) {
      ...MessageReactionFragment
    }
  }
`