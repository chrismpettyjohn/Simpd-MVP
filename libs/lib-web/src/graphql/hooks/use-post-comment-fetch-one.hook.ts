import { useLazyQuery } from "@apollo/client";
import { PostCommentFragment } from "graphql/fragments/post-comment.fragment";
import { POST_COMMENT_FETCH_ONE_QUERY, PostCommentFetchOneInput, PostCommentFetchOneQueryResponse, PostCommentFetchOneQueryVariables } from "graphql/queries/post-comment-fetch-one.query";

export interface UsePostCommentFetchOneQueryResponse {
  fetch(filter: PostCommentFetchOneInput): Promise<PostCommentFragment>;
  error?: Error;
  loading: boolean;
  data?: PostCommentFragment;
}

export function usePostCommentFetchOne(): UsePostCommentFetchOneQueryResponse {
  const [getPostComment, { loading, error, data }] = useLazyQuery<PostCommentFetchOneQueryResponse, PostCommentFetchOneQueryVariables>(POST_COMMENT_FETCH_ONE_QUERY);

  const onFetchPostComment = async (filter: PostCommentFetchOneInput) => {
    const matchingPostComments = await getPostComment({ variables: { filter } })
    return matchingPostComments.data!.postComment;
  }

  return {
    fetch: onFetchPostComment,
    error,
    loading,
    data: data?.postComment,
  }
}