import { useMutation } from "@apollo/client";
import { MessageReactionFetchOneInput } from "graphql/queries/message-reaction-fetch-one.query";
import { MESSAGE_REACTION_DELETE_ONE_MUTATION, MessageReactionDeleteMutationResponse, MessageReactionDeleteMutationVariables } from "../mutation/message-reaction-delete-one.mutation";

export interface UseMessageReactionDeleteResponse {
  execute(filter: MessageReactionFetchOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useMessageReactionDelete(): UseMessageReactionDeleteResponse {
  const [deleteMessageReaction, { loading, error, data }] = useMutation<MessageReactionDeleteMutationResponse, MessageReactionDeleteMutationVariables>(MESSAGE_REACTION_DELETE_ONE_MUTATION);

  const onDeleteMessageReaction = async (filter: MessageReactionFetchOneInput) => {
    const newMessage = await deleteMessageReaction({
      variables: { filter }
    })
    return newMessage.data!.success;
  }

  return {
    execute: onDeleteMessageReaction,
    error,
    loading,
    data: data?.success ?? undefined,
  }
}