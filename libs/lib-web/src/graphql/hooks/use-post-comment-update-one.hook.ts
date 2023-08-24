import { useMutation } from "@apollo/client";
import { PostCommentFetchOneInput } from "../../graphql/queries/post-comment-fetch-one.query";
import { POST_COMMENT_UPDATE_ONE_MUTATION, PostCommentUpdateOneInput, PostCommentUpdateOneMutationResponse, PostCommentUpdateOneMutationVariables } from "../../graphql/mutation/post-comment-update-one.mutation";

export interface UsePostCommentUpdateOneResponse {
  execute(filter: PostCommentFetchOneInput, changes: PostCommentUpdateOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function usePostCommentUpdateOne(): UsePostCommentUpdateOneResponse {
  const [updatePostComment, { loading, error, data }] = useMutation<PostCommentUpdateOneMutationResponse, PostCommentUpdateOneMutationVariables>(POST_COMMENT_UPDATE_ONE_MUTATION);

  const onUpdatePostComment = async (filter: PostCommentFetchOneInput, changes: PostCommentUpdateOneInput) => {
    const newPost = await updatePostComment({
      variables: { filter, changes }
    })
    return newPost.data!.success;
  }

  return {
    execute: onUpdatePostComment,
    error,
    loading,
    data: data?.success,
  }
}