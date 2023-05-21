import { useLazyQuery } from "@apollo/client";
import { PostWithTextFragment } from "../fragments/post.fragment";
import { POST_FETCH_MANY_QUERY, PostFetchManyQueryResponse, PostFetchManyQueryVariables } from "../queries/post-fetch-many.query";


export interface UsePostFetchManyQueryResponse {
  fetch(filter: PostFetchManyQueryVariables): Promise<PostWithTextFragment[]>;
  error?: Error;
  loading: boolean;
  data?: PostWithTextFragment[];
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