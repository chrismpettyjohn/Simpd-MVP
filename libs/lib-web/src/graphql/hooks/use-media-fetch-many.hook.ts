import { useLazyQuery } from "@apollo/client";
import { MediaFragment } from "../fragments/media.fragment";
import { MEDIA_FETCH_MANY_QUERY, MediaFetchManyInput, MediaFetchManyQueryResponse, MediaFetchManyQueryVariables } from "../queries/media-fetch-many.query";

export interface UseFetchMediaFetchManyResponse {
  fetch(filter: MediaFetchManyInput): Promise<MediaFragment[]>;
  error?: Error;
  loading: boolean;
  data?: MediaFragment[];
}

export function useMediaFetchMany(): UseFetchMediaFetchManyResponse {
  const [getMedia, { loading, error, data }] = useLazyQuery<MediaFetchManyQueryResponse, MediaFetchManyQueryVariables>(MEDIA_FETCH_MANY_QUERY);

  const onFetchMedia = async (filter: MediaFetchManyInput): Promise<MediaFragment[]> => {
    const matchingMedia = await getMedia({ variables: { filter } });
    return matchingMedia.data!.medias;
  }

  return {
    fetch: onFetchMedia,
    error,
    loading,
    data: data?.medias,
  }
}