import { useLazyQuery } from "@apollo/client";
import { PostFetchOneInput } from "graphql/queries/post-fetch-one.query";
import { POST_FAVORITES_QUERY, PostFavoritesQueryResponse, PostFavoritesVariables } from "graphql/queries/post-favorites.query";


export interface UsePostFavoritesResponse {
  fetch(filter: PostFetchOneInput): Promise<number>;
  error?: Error;
  loading: boolean;
  data?: number;
}

export function usePostFavorites(): UsePostFavoritesResponse {
  const [getPostFavorites, { loading, error, data, refetch }] = useLazyQuery<PostFavoritesQueryResponse, PostFavoritesVariables>(POST_FAVORITES_QUERY);

  const onFetchPostFavorites = async (filter: PostFetchOneInput) => {
    if (data) {
      await refetch();
    }
    const matchingPosts = await getPostFavorites({ variables: { filter } })
    return matchingPosts.data!.postFavorites;
  }

  return {
    fetch: onFetchPostFavorites,
    error,
    loading,
    data: data?.postFavorites,
  }
}