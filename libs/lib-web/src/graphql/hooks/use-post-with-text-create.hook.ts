import { useMutation } from "@apollo/client";
import { PostWithTextFragment } from "graphql/fragments/post.fragment";
import { POST_WITH_TEXT_CREATE_MUTATION, PostWithTextCreateInput, PostWithTextCreateMutationResponse, PostWithTextCreateMutationVariables } from "graphql/mutation/post-with-text-create.mutation";

export interface UsePostWithTextCreateResponse {
  execute(input: PostWithTextCreateInput): Promise<PostWithTextFragment>;
  error?: Error;
  loading: boolean;
  data?: PostWithTextFragment;
}

export function usePostWithTextCreate(): UsePostWithTextCreateResponse {
  const [createPostWithText, { loading, error, data }] = useMutation<PostWithTextCreateMutationResponse, PostWithTextCreateMutationVariables>(POST_WITH_TEXT_CREATE_MUTATION);

  const onCreatePostWithText = async (input: PostWithTextCreateInput) => {
    const newPost = await createPostWithText({
      variables: { input }
    })
    return newPost.data!.postWithTextCreate;
  }

  return {
    execute: onCreatePostWithText,
    error,
    loading,
    data: data?.postWithTextCreate,
  }
}