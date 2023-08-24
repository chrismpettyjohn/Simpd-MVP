import { useLazyQuery } from "@apollo/client";
import { PostCommentFragment } from "../../graphql/fragments/post-comment.fragment";
import { POST_COMMENT_FETCH_MANY_QUERY, PostCommentFetchManyInput, PostCommentFetchManyQueryResponse, PostCommentFetchManyQueryVariables } from "../../graphql/queries/post-comment-fetch-many.query";

export interface UsePostCommentFetchManyQueryResponse {
  fetch(filter: PostCommentFetchManyInput): Promise<PostCommentFragment[]>;
  error?: Error;
  loading: boolean;
  data?: PostCommentFragment[];
}

export function usePostCommentFetchMany(): UsePostCommentFetchManyQueryResponse {
  const [getPostComment, { loading, error, data, refetch }] = useLazyQuery<PostCommentFetchManyQueryResponse, PostCommentFetchManyQueryVariables>(POST_COMMENT_FETCH_MANY_QUERY);

  const onFetchPostComment = async (filter: PostCommentFetchManyInput) => {
    if (data) {
      await refetch();
    }
    const matchingPostComments = await getPostComment({ variables: { filter } })
    return matchingPostComments.data!.postComments;
  }

  return {
    fetch: onFetchPostComment,
    error,
    loading,
    data: data?.postComments,
  }
}