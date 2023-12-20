import { useMutation } from "@apollo/client";
import { AlbumFragment } from "../fragments/album.fragment";
import { ALBUM_CREATE_ONE_MUTATION, AlbumCreateInput, AlbumCreateOneMutationResponse, AlbumCreateOneMutationVariables } from "../mutation/album-create-one.mutation";

export interface UseAlbumCreateResponse {
  execute(input: AlbumCreateInput): Promise<AlbumFragment>;
  error?: Error;
  loading: boolean;
  data?: AlbumFragment;
}

export function useAlbumCreate(): UseAlbumCreateResponse {
  const [createAlbum, { loading, error, data }] = useMutation<AlbumCreateOneMutationResponse, AlbumCreateOneMutationVariables>(ALBUM_CREATE_ONE_MUTATION);

  const onCreateAlbum = async (input: AlbumCreateInput) => {
    const newPost = await createAlbum({
      variables: { input }
    })
    return newPost.data!.albumCreate;
  }

  return {
    execute: onCreateAlbum,
    error,
    loading,
    data: data?.albumCreate,
  }
}