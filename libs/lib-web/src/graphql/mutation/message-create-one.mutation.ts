import gql from "graphql-tag";
import { MESSAGE_FRAGMENT, MessageFragment } from "graphql/fragments/message.fragment";

export interface MessageCreateInput {
}

export interface MessageCreateMutationVariables {
  input: MessageCreateInput;
}

export interface MessageCreateMutationResponse {
  messageCreate: MessageFragment;
}

export const MESSAGE_CREATE_MUTATION = gql`
  ${MESSAGE_FRAGMENT}
  mutation($input: MessageCreateInput!) {
    messageCreate(
      input: $input
    ) {
      ...MessageFragment
    }
  }
`