import { useMutation } from "@apollo/client";
import { MessageReactionFragment } from "../fragments/message-reaction.fragment";
import { MESSAGE_REACTION_CREATE_MUTATION, MessageReactionCreateInput, MessageReactionCreateMutationResponse, MessageReactionCreateMutationVariables } from "../mutation/message-reaction-create-one.mutation";

export interface UseMessageReactionCreateResponse {
  execute(input: MessageReactionCreateInput): Promise<MessageReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: MessageReactionFragment;
}

export function useMessageReactionCreate(): UseMessageReactionCreateResponse {
  const [createMessageReaction, { loading, error, data }] = useMutation<MessageReactionCreateMutationResponse, MessageReactionCreateMutationVariables>(MESSAGE_REACTION_CREATE_MUTATION);

  const onCreateMessageReaction = async (input: MessageReactionCreateInput) => {
    const newMessage = await createMessageReaction({
      variables: { input }
    })
    return newMessage.data!.messageReactionCreate;
  }

  return {
    execute: onCreateMessageReaction,
    error,
    loading,
    data: data?.messageReactionCreate,
  }
}