import { useLazyQuery } from "@apollo/client";
import { AlbumFragment } from "../fragments/album.fragment";
import { ALBUM_FETCH_MANY_QUERY, AlbumFindManyInput, AlbumFetchManyQueryResponse, AlbumFetchManyQueryVariables } from "../queries/album-fetch-many.query";

export interface UseFetchAlbumFetchManyResponse {
  fetch(filter: AlbumFindManyInput): Promise<AlbumFragment[]>;
  error?: Error;
  loading: boolean;
  data?: AlbumFragment[];
}

export function useAlbumFetchMany(): UseFetchAlbumFetchManyResponse {
  const [getAlbum, { loading, error, data }] = useLazyQuery<AlbumFetchManyQueryResponse, AlbumFetchManyQueryVariables>(ALBUM_FETCH_MANY_QUERY);

  const onFetchAlbum = async (filter: AlbumFindManyInput): Promise<AlbumFragment[]> => {
    const matchingAlbum = await getAlbum({ variables: { filter } })
    return matchingAlbum.data!.albums;
  }

  return {
    fetch: onFetchAlbum,
    error,
    loading,
    data: data?.albums,
  }
}