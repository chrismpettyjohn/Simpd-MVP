import { useLazyQuery } from "@apollo/client";
import { MessageFragment } from "graphql/fragments/message.fragment";
import { MESSAGE_FETCH_MANY_QUERY, MessageFetchManyQueryResponse, MessageFetchManyQueryVariables } from "graphql/queries/message-fetch-many.query";

export interface UseMessageFetchManyQueryResponse {
  fetch(filter: MessageFetchManyQueryVariables): Promise<MessageFragment[]>;
  error?: Error;
  loading: boolean;
  data?: MessageFragment[];
}

export function useMessageFetchMany(): UseMessageFetchManyQueryResponse {
  const [getMessage, { loading, error, data }] = useLazyQuery<MessageFetchManyQueryResponse, MessageFetchManyQueryVariables>(MESSAGE_FETCH_MANY_QUERY);

  const onFetchMessage = async (filter: MessageFetchManyQueryVariables) => {
    const matchingMessages = await getMessage({ variables: filter })
    return matchingMessages.data!.messages;
  }

  return {
    fetch: onFetchMessage,
    error,
    loading,
    data: data?.messages,
  }
}