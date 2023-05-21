import { useLazyQuery } from "@apollo/client";
import { MessageFragment } from "../fragments/message.fragment";
import { MESSAGE_FETCH_ONE_QUERY, MessageFetchOneQueryResponse, MessageFetchOneQueryVariables } from "../queries/message-fetch-one.query";

export interface UseMessageFetchOneQueryResponse {
  fetch(filter: MessageFetchOneQueryVariables): Promise<MessageFragment>;
  error?: Error;
  loading: boolean;
  data?: MessageFragment;
}

export function useMessageFetchOne(): UseMessageFetchOneQueryResponse {
  const [getMessage, { loading, error, data }] = useLazyQuery<MessageFetchOneQueryResponse, MessageFetchOneQueryVariables>(MESSAGE_FETCH_ONE_QUERY);

  const onFetchMessage = async (filter: MessageFetchOneQueryVariables) => {
    const matchingMessages = await getMessage({ variables: filter })
    return matchingMessages.data!.message;
  }

  return {
    fetch: onFetchMessage,
    error,
    loading,
    data: data?.message,
  }
}