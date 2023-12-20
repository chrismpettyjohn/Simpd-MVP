import { useMutation } from "@apollo/client";
import { ALBUM_DELETE_ONE_MUTATION, AlbumDeleteOneMutationResponse, AlbumDeleteOneMutationVariables } from "../mutation/album-delete-one.mutation";
import { AlbumFindOneInput } from "graphql/queries/album-fetch-one.query";

export interface UseAlbumDeleteResponse {
  execute(filter: AlbumFindOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useAlbumDelete(): UseAlbumDeleteResponse {
  const [createAlbum, { loading, error, data }] = useMutation<AlbumDeleteOneMutationResponse, AlbumDeleteOneMutationVariables>(ALBUM_DELETE_ONE_MUTATION);

  const onDeleteAlbum = async (filter: AlbumFindOneInput) => {
    const newPost = await createAlbum({
      variables: { filter }
    })
    return newPost.data!.success;
  }

  return {
    execute: onDeleteAlbum,
    error,
    loading,
    data: data?.success,
  }
}