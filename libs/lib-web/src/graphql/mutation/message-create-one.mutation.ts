import gql from "graphql-tag";
import { MESSAGE_FRAGMENT, MessageFragment } from "../fragments/message.fragment";

export interface MessageCreateInput {
  receivingProfileID: number;
  content: string;
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