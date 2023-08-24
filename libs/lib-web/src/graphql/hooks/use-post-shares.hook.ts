import { useLazyQuery } from "@apollo/client";
import { PostFetchOneInput } from "graphql/queries/post-fetch-one.query";
import { POST_SHARES_QUERY, PostSharesQueryResponse, PostSharesVariables } from "graphql/queries/post-shares.query";


export interface UsePostSharesResponse {
  fetch(filter: PostFetchOneInput): Promise<number>;
  error?: Error;
  loading: boolean;
  data?: number;
}

export function usePostShares(): UsePostSharesResponse {
  const [getPostShares, { loading, error, data, refetch }] = useLazyQuery<PostSharesQueryResponse, PostSharesVariables>(POST_SHARES_QUERY);

  const onFetchPostShares = async (filter: PostFetchOneInput) => {
    if (data) {
      await refetch();
    }
    const matchingPosts = await getPostShares({ variables: { filter } })
    return matchingPosts.data!.postShareCount;
  }

  return {
    fetch: onFetchPostShares,
    error,
    loading,
    data: data?.postShareCount,
  }
}