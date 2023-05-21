import { useMutation } from "@apollo/client";
import { PostWithAlbumFragment } from "../fragments/post.fragment";
import { POST_WITH_ALBUM_CREATE_MUTATION, PostWithAlbumCreateInput, PostWithAlbumCreateMutationResponse, PostWithAlbumCreateMutationVariables } from "../mutation/post-with-album-create.mutation";

export interface UsePostWithAlbumCreateResponse {
  execute(input: PostWithAlbumCreateInput): Promise<PostWithAlbumFragment>;
  error?: Error;
  loading: boolean;
  data?: PostWithAlbumFragment;
}

export function usePostWithAlbumCreate(): UsePostWithAlbumCreateResponse {
  const [createPostWithAlbum, { loading, error, data }] = useMutation<PostWithAlbumCreateMutationResponse, PostWithAlbumCreateMutationVariables>(POST_WITH_ALBUM_CREATE_MUTATION);

  const onCreatePostWithAlbum = async (input: PostWithAlbumCreateInput) => {
    const newPost = await createPostWithAlbum({
      variables: { input }
    })
    return newPost.data!.postWithAlbumCreate;
  }

  return {
    execute: onCreatePostWithAlbum,
    error,
    loading,
    data: data?.postWithAlbumCreate,
  }
}