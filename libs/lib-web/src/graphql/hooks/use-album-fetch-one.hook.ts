import { useLazyQuery } from "@apollo/client";
import { AlbumFragment } from "../fragments/album.fragment";
import { ALBUM_FETCH_ONE_QUERY, AlbumFetchOneInput, AlbumFetchOneQueryResponse, AlbumFetchOneQueryVariables } from "../queries/album-fetch-one.query";

export interface UseFetchAlbumFetchOneResponse {
  fetch(filter: AlbumFetchOneInput): Promise<AlbumFragment>;
  error?: Error;
  loading: boolean;
  data?: AlbumFragment;
}

export function useAlbumFetchOne(): UseFetchAlbumFetchOneResponse {
  const [getAlbum, { loading, error, data }] = useLazyQuery<AlbumFetchOneQueryResponse, AlbumFetchOneQueryVariables>(ALBUM_FETCH_ONE_QUERY);

  const onFetchAlbum = async (filter: AlbumFetchOneInput): Promise<AlbumFragment> => {
    const matchingAlbum = await getAlbum({ variables: { filter } })
    return matchingAlbum.data!.album;
  }

  return {
    fetch: onFetchAlbum,
    error,
    loading,
    data: data?.album,
  }
}