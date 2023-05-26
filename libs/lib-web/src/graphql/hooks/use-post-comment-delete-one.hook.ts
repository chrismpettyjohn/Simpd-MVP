import { useMutation } from "@apollo/client";
import { PostCommentFetchOneInput } from "graphql/queries/post-comment-fetch-one.query";
import { POST_COMMENT_DELETE_ONE_MUTATION, PostCommentDeleteOneMutationResponse, PostCommentDeleteOneMutationVariables } from "graphql/mutation/post-comment-delete-one.mutation";

export interface UsePostCommentDeleteOneResponse {
  execute(filter: PostCommentFetchOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function usePostCommentDeleteOne(): UsePostCommentDeleteOneResponse {
  const [createPostComment, { loading, error, data }] = useMutation<PostCommentDeleteOneMutationResponse, PostCommentDeleteOneMutationVariables>(POST_COMMENT_DELETE_ONE_MUTATION);

  const onDeletePostComment = async (filter: PostCommentFetchOneInput) => {
    const newPost = await createPostComment({
      variables: { filter }
    })
    return newPost.data!.success;
  }

  return {
    execute: onDeletePostComment,
    error,
    loading,
    data: data?.success,
  }
}