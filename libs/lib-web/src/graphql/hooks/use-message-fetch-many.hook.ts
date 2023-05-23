import { useLazyQuery } from "@apollo/client";
import { MessageFragment } from "../fragments/message.fragment";
import { MESSAGE_FETCH_MANY_QUERY, MessageFetchManyQueryInput, MessageFetchManyQueryResponse, MessageFetchManyQueryVariables } from "../queries/message-fetch-many.query";

export interface UseMessageFetchManyQueryResponse {
  fetch(filter: MessageFetchManyQueryInput): Promise<MessageFragment[]>;
  error?: Error;
  loading: boolean;
  data?: MessageFragment[];
}

export function useMessageFetchMany(): UseMessageFetchManyQueryResponse {
  const [getMessage, { loading, error, data, refetch }] = useLazyQuery<MessageFetchManyQueryResponse, MessageFetchManyQueryVariables>(MESSAGE_FETCH_MANY_QUERY);

  const onFetchMessage = async (filter: MessageFetchManyQueryInput) => {
    if (data) {
      await refetch();
    }
    const matchingMessages = await getMessage({ variables: { filter } })
    return matchingMessages.data!.messages;
  }

  return {
    fetch: onFetchMessage,
    error,
    loading,
    data: data?.messages,
  }
}