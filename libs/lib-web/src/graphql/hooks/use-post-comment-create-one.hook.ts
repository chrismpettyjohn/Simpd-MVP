import { useMutation } from "@apollo/client";
import { PostCommentFragment } from "../../graphql/fragments/post-comment.fragment";
import { POST_COMMENT_CREATE_ONE_MUTATION, PostCommentCreateOneInput, PostCommentCreateOneMutationResponse, PostCommentCreateOneMutationVariables } from "../../graphql/mutation/post-comment-create-one.mutation";

export interface UsePostCommentCreateOneResponse {
  execute(input: PostCommentCreateOneInput): Promise<PostCommentFragment>;
  error?: Error;
  loading: boolean;
  data?: PostCommentFragment;
}

export function usePostCommentCreateOne(): UsePostCommentCreateOneResponse {
  const [createPostComment, { loading, error, data }] = useMutation<PostCommentCreateOneMutationResponse, PostCommentCreateOneMutationVariables>(POST_COMMENT_CREATE_ONE_MUTATION);

  const onCreatePostComment = async (input: PostCommentCreateOneInput) => {
    const newPost = await createPostComment({
      variables: { input }
    })
    return newPost.data!.postCommentCreate;
  }

  return {
    execute: onCreatePostComment,
    error,
    loading,
    data: data?.postCommentCreate,
  }
}