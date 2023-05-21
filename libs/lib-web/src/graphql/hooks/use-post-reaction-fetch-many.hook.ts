import { useLazyQuery } from "@apollo/client";
import { PostReactionFragment } from "../fragments/post-reaction.fragment";
import { POST_REACTION_FETCH_MANY_QUERY, PostReactionFetchManyQueryResponse, PostReactionFetchManyQueryVariables } from "../queries/post-reaction-fetch-many.query";

export interface UsePostReactionFetchManyQueryResponse {
  fetch(filter: PostReactionFetchManyQueryVariables): Promise<PostReactionFragment[]>;
  error?: Error;
  loading: boolean;
  data?: PostReactionFragment[];
}

export function usePostReactionFetchMany(): UsePostReactionFetchManyQueryResponse {
  const [getPostReaction, { loading, error, data, refetch }] = useLazyQuery<PostReactionFetchManyQueryResponse, PostReactionFetchManyQueryVariables>(POST_REACTION_FETCH_MANY_QUERY);

  const onFetchPostReaction = async ({ filter }: PostReactionFetchManyQueryVariables) => {
    if (data) {
      refetch();
    }
    const matchingPostReactions = await getPostReaction({ variables: { filter } })
    return matchingPostReactions.data!.postReactions;
  }

  return {
    fetch: onFetchPostReaction,
    error,
    loading,
    data: data?.postReactions,
  }
}