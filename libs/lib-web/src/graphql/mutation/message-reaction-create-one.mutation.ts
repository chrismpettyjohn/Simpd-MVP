import gql from "graphql-tag";
import { MESSAGE_REACTION_FRAGMENT, MessageReactionFragment } from "graphql/fragments/message-reaction.fragment";

export enum ReactionType {
  Like = 'Like',
}

export interface MessageReactionCreateInput {
  messageID: number;
  reaction: ReactionType;
}

export interface MessageReactionCreateMutationVariables {
  input: MessageReactionCreateInput;
}

export interface MessageReactionCreateMutationResponse {
  messageReactionCreate: MessageReactionFragment;
}

export const MESSAGE_REACTION_CREATE_MUTATION = gql`
  ${MESSAGE_REACTION_FRAGMENT}
  mutation($input: MessageReactionCreateInput!) {
    messageReactionCreate(
      input: $input
    ) {
      ...MessageReactionFragment
    }
  }
`