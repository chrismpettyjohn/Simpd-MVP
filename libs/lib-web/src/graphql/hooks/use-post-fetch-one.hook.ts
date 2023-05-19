import { useLazyQuery } from "@apollo/client";
import { PostWithTextFragment } from "graphql/fragments/post.fragment";
import { POST_FETCH_ONE_QUERY, PostFetchOneQueryResponse, PostFetchOneQueryVariables } from "graphql/queries/post-fetch-one.query";


export interface UsePostFetchOneQueryResponse {
  fetch(filter: PostFetchOneQueryVariables): Promise<PostWithTextFragment>;
  error?: Error;
  loading: boolean;
  data?: PostWithTextFragment;
}

export function usePostFetchOne(): UsePostFetchOneQueryResponse {
  const [getPost, { loading, error, data }] = useLazyQuery<PostFetchOneQueryResponse, PostFetchOneQueryVariables>(POST_FETCH_ONE_QUERY);

  const onFetchPost = async (filter: PostFetchOneQueryVariables) => {
    const matchingPosts = await getPost({ variables: filter })
    return matchingPosts.data!.post;
  }

  return {
    fetch: onFetchPost,
    error,
    loading,
    data: data?.post,
  }
}