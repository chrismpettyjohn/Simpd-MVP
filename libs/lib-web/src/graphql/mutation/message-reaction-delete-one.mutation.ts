import gql from "graphql-tag";
import { MessageReactionFetchOneInput } from "../../graphql/queries/message-reaction-fetch-one.query";

export interface MessageReactionDeleteMutationVariables {
  filter: MessageReactionFetchOneInput;
}

export interface MessageReactionDeleteMutationResponse {
  success: boolean;
}

export const MESSAGE_REACTION_DELETE_ONE_MUTATION = gql`
  mutation($filter: MessageReactionFilterOneInput!) {
    messageReactionDelete(
      filter: $filter
    )
  }
`