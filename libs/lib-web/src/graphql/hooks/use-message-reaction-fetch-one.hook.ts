import { useLazyQuery } from "@apollo/client";
import { MessageReactionFragment } from "../fragments/message-reaction.fragment";
import { MESSAGE_REACTION_FETCH_ONE_QUERY, MessageReactionFetchOneQueryResponse, MessageReactionFetchOneQueryVariables } from "../queries/message-reaction-fetch-one.query";

export interface UseMessageReactionFetchOneQueryResponse {
  fetch(filter: MessageReactionFetchOneQueryVariables): Promise<MessageReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: MessageReactionFragment;
}

export function useMessageReactionFetchOne(): UseMessageReactionFetchOneQueryResponse {
  const [getMessageReaction, { loading, error, data }] = useLazyQuery<MessageReactionFetchOneQueryResponse, MessageReactionFetchOneQueryVariables>(MESSAGE_REACTION_FETCH_ONE_QUERY);

  const onFetchMessageReaction = async (filter: MessageReactionFetchOneQueryVariables) => {
    const matchingMessageReactions = await getMessageReaction({ variables: filter })
    return matchingMessageReactions.data!.messageReaction;
  }

  return {
    fetch: onFetchMessageReaction,
    error,
    loading,
    data: data?.messageReaction,
  }
}