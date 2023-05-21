import { useMutation } from "@apollo/client";
import { MessageFragment } from "../fragments/message.fragment";
import { MESSAGE_CREATE_MUTATION, MessageCreateInput, MessageCreateMutationResponse, MessageCreateMutationVariables } from "../mutation/message-create-one.mutation";

export interface UseMessageCreateResponse {
  execute(input: MessageCreateInput): Promise<MessageFragment>;
  error?: Error;
  loading: boolean;
  data?: MessageFragment;
}

export function useMessageCreate(): UseMessageCreateResponse {
  const [createMessage, { loading, error, data }] = useMutation<MessageCreateMutationResponse, MessageCreateMutationVariables>(MESSAGE_CREATE_MUTATION);

  const onCreateMessage = async (input: MessageCreateInput) => {
    const newPost = await createMessage({
      variables: { input }
    })
    return newPost.data!.messageCreate;
  }

  return {
    execute: onCreateMessage,
    error,
    loading,
    data: data?.messageCreate,
  }
}