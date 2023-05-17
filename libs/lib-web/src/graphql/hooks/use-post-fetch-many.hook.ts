import { useLazyQuery } from "@apollo/client";
import { BasePostFragment } from "graphql/fragments/post.fragment";
import { POST_FETCH_MANY_QUERY, PostFetchManyQueryResponse, PostFetchManyQueryVariables } from "graphql/queries/post-fetch-many.query";


export interface UsePostFetchManyQueryResponse {
  fetch(filter: PostFetchManyQueryVariables): Promise<BasePostFragment[]>;
  error?: Error;
  loading: boolean;
  data?: BasePostFragment[];
}

export function usePostFetchMany(): UsePostFetchManyQueryResponse {
  const [getPosts, { loading, error, data }] = useLazyQuery<PostFetchManyQueryResponse, PostFetchManyQueryVariables>(POST_FETCH_MANY_QUERY);

  const onFetchPosts = async (filter: PostFetchManyQueryVariables) => {
    const matchingPosts = await getPosts({ variables: filter })
    return matchingPosts.data!.posts;
  }

  return {
    fetch: onFetchPosts,
    error,
    loading,
    data: data?.posts,
  }
}