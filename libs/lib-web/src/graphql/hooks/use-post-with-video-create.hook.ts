import { useMutation } from "@apollo/client";
import { PostWithVideoFragment } from "../fragments/post.fragment";
import { POST_WITH_VIDEO_CREATE_MUTATION, PostWithVideoCreateInput, PostWithVideoCreateMutationResponse, PostWithVideoCreateMutationVariables } from "../mutation/post-with-video-create.mutation";

export interface UsePostWithVideoCreateResponse {
  execute(input: PostWithVideoCreateInput): Promise<PostWithVideoFragment>;
  error?: Error;
  loading: boolean;
  data?: PostWithVideoFragment;
}

export function usePostWithVideoCreate(): UsePostWithVideoCreateResponse {
  const [createPostWithVideo, { loading, error, data }] = useMutation<PostWithVideoCreateMutationResponse, PostWithVideoCreateMutationVariables>(POST_WITH_VIDEO_CREATE_MUTATION);

  const onCreatePostWithVideo = async (input: PostWithVideoCreateInput) => {
    const newPost = await createPostWithVideo({
      variables: { input }
    })
    return newPost.data!.postWithVideoCreate;
  }

  return {
    execute: onCreatePostWithVideo,
    error,
    loading,
    data: data?.postWithVideoCreate,
  }
}