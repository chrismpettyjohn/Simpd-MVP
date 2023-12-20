import { useMutation } from "@apollo/client";
import { ALBUM_UPDATE_ONE_MUTATION, AlbumUpdateOneInput, AlbumUpdateOneMutationResponse, AlbumUpdateOneMutationVariables } from "../mutation/album-update-one.mutation";
import { AlbumFindOneInput } from "graphql/queries/album-fetch-one.query";

export interface UseAlbumUpdateResponse {
  execute(filter: AlbumFindOneInput, input: AlbumUpdateOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useAlbumUpdate(): UseAlbumUpdateResponse {
  const [createAlbum, { loading, error, data }] = useMutation<AlbumUpdateOneMutationResponse, AlbumUpdateOneMutationVariables>(ALBUM_UPDATE_ONE_MUTATION);

  const onUpdateAlbum = async (filter: AlbumFindOneInput, input: AlbumUpdateOneInput) => {
    const newPost = await createAlbum({
      variables: { filter, input }
    })
    return newPost.data!.success;
  }

  return {
    execute: onUpdateAlbum,
    error,
    loading,
    data: data?.success,
  }
}