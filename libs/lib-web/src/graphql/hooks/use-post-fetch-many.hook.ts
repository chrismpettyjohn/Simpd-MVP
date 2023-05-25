import { useLazyQuery } from "@apollo/client";
import { PostFragment } from "../fragments/post.fragment";
import { POST_FETCH_MANY_QUERY, PostFetchManyQueryResponse, PostFetchManyQueryVariables } from "../queries/post-fetch-many.query";


export interface UsePostFetchManyQueryResponse {
  fetch(filter: PostFetchManyQueryVariables): Promise<PostFragment[]>;
  error?: Error;
  loading: boolean;
  data?: PostFragment[];
}

export function usePostFetchMany(): UsePostFetchManyQueryResponse {
  const [getPosts, { loading, error, data, refetch }] = useLazyQuery<PostFetchManyQueryResponse, PostFetchManyQueryVariables>(POST_FETCH_MANY_QUERY);


  const onFetchPosts = async (filter: PostFetchManyQueryVariables) => {
    if (data) {
      await refetch();
    }
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