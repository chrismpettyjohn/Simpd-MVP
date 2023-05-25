import { useLazyQuery } from "@apollo/client";
import { PostFetchOneInput } from "graphql/queries/post-fetch-one.query";
import { POST_REACTIONS_QUERY, PostReactionsQueryResponse, PostReactionsVariables } from "graphql/queries/post-reactions.query";


export interface UsePostReactionsResponse {
  fetch(filter: PostFetchOneInput): Promise<number>;
  error?: Error;
  loading: boolean;
  data?: number;
}

export function usePostReactions(): UsePostReactionsResponse {
  const [getPostReactions, { loading, error, data, refetch }] = useLazyQuery<PostReactionsQueryResponse, PostReactionsVariables>(POST_REACTIONS_QUERY);

  const onFetchPostReactions = async (filter: PostFetchOneInput) => {
    if (data) {
      await refetch();
    }
    const matchingPosts = await getPostReactions({ variables: { filter } })
    return matchingPosts.data!.postReactions;
  }

  return {
    fetch: onFetchPostReactions,
    error,
    loading,
    data: data?.postReactions,
  }
}