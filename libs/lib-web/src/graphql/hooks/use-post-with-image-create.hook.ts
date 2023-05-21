import { useMutation } from "@apollo/client";
import { PostWithImageFragment } from "../fragments/post.fragment";
import { POST_WITH_IMAGE_CREATE_MUTATION, PostWithImageCreateInput, PostWithImageCreateMutationResponse, PostWithImageCreateMutationVariables } from "../mutation/post-with-image-create.mutation";

export interface UsePostWithImageCreateResponse {
  execute(input: PostWithImageCreateInput): Promise<PostWithImageFragment>;
  error?: Error;
  loading: boolean;
  data?: PostWithImageFragment;
}

export function usePostWithImageCreate(): UsePostWithImageCreateResponse {
  const [createPostWithImage, { loading, error, data }] = useMutation<PostWithImageCreateMutationResponse, PostWithImageCreateMutationVariables>(POST_WITH_IMAGE_CREATE_MUTATION);

  const onCreatePostWithImage = async (input: PostWithImageCreateInput) => {
    const newPost = await createPostWithImage({
      variables: { input }
    })
    return newPost.data!.postWithImageCreate;
  }

  return {
    execute: onCreatePostWithImage,
    error,
    loading,
    data: data?.postWithImageCreate,
  }
}