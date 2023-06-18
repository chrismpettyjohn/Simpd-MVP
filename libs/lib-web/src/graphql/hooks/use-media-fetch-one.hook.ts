import { useLazyQuery } from "@apollo/client";
import { MediaFragment } from "../fragments/media.fragment";
import { MEDIA_FETCH_ONE_QUERY, MediaFetchOneInput, MediaFetchOneQueryResponse, MediaFetchOneQueryVariables } from "../queries/media-fetch-one.query";

export interface UseFetchMediaFetchOneResponse {
  fetch(filter: MediaFetchOneInput): Promise<MediaFragment>;
  error?: Error;
  loading: boolean;
  data?: MediaFragment;
}

export function useMediaFetchOne(): UseFetchMediaFetchOneResponse {
  const [getMedia, { loading, error, data }] = useLazyQuery<MediaFetchOneQueryResponse, MediaFetchOneQueryVariables>(MEDIA_FETCH_ONE_QUERY);

  const onFetchMedia = async (filter: MediaFetchOneInput): Promise<MediaFragment> => {
    const matchingMedia = await getMedia({ variables: { filter } });
    return matchingMedia.data!.media;
  }

  return {
    fetch: onFetchMedia,
    error,
    loading,
    data: data?.media,
  }
}