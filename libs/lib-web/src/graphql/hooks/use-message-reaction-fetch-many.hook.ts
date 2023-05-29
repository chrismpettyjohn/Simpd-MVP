import { useLazyQuery } from "@apollo/client";
import { MessageReactionFragment } from "../fragments/message-reaction.fragment";
import { MESSAGE_REACTION_FETCH_MANY_QUERY, MessageReactionFetchManyQueryResponse, MessageReactionFetchManyQueryVariables } from "../queries/message-reaction-fetch-many.query";

export interface UseMessageReactionFetchManyQueryResponse {
  fetch(filter: MessageReactionFetchManyQueryVariables): Promise<MessageReactionFragment[]>;
  error?: Error;
  loading: boolean;
  data?: MessageReactionFragment[];
}

export function useMessageReactionFetchMany(): UseMessageReactionFetchManyQueryResponse {
  const [getMessageReaction, { loading, error, data, refetch }] = useLazyQuery<MessageReactionFetchManyQueryResponse, MessageReactionFetchManyQueryVariables>(MESSAGE_REACTION_FETCH_MANY_QUERY);

  const onFetchMessageReaction = async ({ filter }: MessageReactionFetchManyQueryVariables) => {
    if (data) {
      refetch();
    }
    const matchingMessageReactions = await getMessageReaction({ variables: { filter } })
    return matchingMessageReactions.data!.messageReactions;
  }

  return {
    fetch: onFetchMessageReaction,
    error,
    loading,
    data: data?.messageReactions,
  }
}