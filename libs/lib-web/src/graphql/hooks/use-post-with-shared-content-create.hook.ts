import { useMutation } from "@apollo/client";
import { PostWithSharedContentFragment } from "graphql/fragments/post.fragment";
import { POST_WITH_SHARED_CONTENT_CREATE_MUTATION, PostWithSharedContentCreateInput, PostWithSharedContentCreateMutationResponse, PostWithSharedContentCreateMutationVariables } from "graphql/mutation/post-with-shared-content-create.mutation";

export interface UsePostWithSharedContentCreateResponse {
  execute(input: PostWithSharedContentCreateInput): Promise<PostWithSharedContentFragment>;
  error?: Error;
  loading: boolean;
  data?: PostWithSharedContentFragment;
}

export function usePostWithSharedContentCreate(): UsePostWithSharedContentCreateResponse {
  const [createPostWithSharedContent, { loading, error, data }] = useMutation<PostWithSharedContentCreateMutationResponse, PostWithSharedContentCreateMutationVariables>(POST_WITH_SHARED_CONTENT_CREATE_MUTATION);

  const onCreatePostWithSharedContent = async (input: PostWithSharedContentCreateInput) => {
    const newPost = await createPostWithSharedContent({
      variables: { input }
    })
    return newPost.data!.postWithSharedContentCreate;
  }

  return {
    execute: onCreatePostWithSharedContent,
    error,
    loading,
    data: data?.postWithSharedContentCreate,
  }
}