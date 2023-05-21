import { useLazyQuery } from "@apollo/client";
import { PostReactionFragment } from "../fragments/post-reaction.fragment";
import { POST_REACTION_FETCH_ONE_QUERY, PostReactionFetchOneQueryResponse, PostReactionFetchOneQueryVariables } from "../queries/post-reaction-fetch-one.query";

export interface UsePostReactionFetchOneQueryResponse {
  fetch(filter: PostReactionFetchOneQueryVariables): Promise<PostReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: PostReactionFragment;
}

export function usePostReactionFetchOne(): UsePostReactionFetchOneQueryResponse {
  const [getPostReaction, { loading, error, data }] = useLazyQuery<PostReactionFetchOneQueryResponse, PostReactionFetchOneQueryVariables>(POST_REACTION_FETCH_ONE_QUERY);

  const onFetchPostReaction = async (filter: PostReactionFetchOneQueryVariables) => {
    const matchingPostReactions = await getPostReaction({ variables: filter })
    return matchingPostReactions.data!.postReaction;
  }

  return {
    fetch: onFetchPostReaction,
    error,
    loading,
    data: data?.postReaction,
  }
}