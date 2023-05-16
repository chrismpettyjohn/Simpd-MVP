import { useLazyQuery } from "@apollo/client";
import { MediaFragment } from "graphql/fragments/media.fragment";
import { MEDIA_FETCH_ONE_QUERY, MediaFetchOneQueryResponse, MediaFetchOneQueryVariables } from "graphql/queries/media-fetch-one.query";


export interface UseFetchMediaQueryResponse {
  fetch(input: MediaFetchOneQueryVariables): Promise<MediaFragment>;
  error?: Error;
  loading: boolean;
  data?: MediaFragment;
}

export function useMediaFetchOne(): UseFetchMediaQueryResponse {
  const [getMedia, { loading, error, data }] = useLazyQuery<MediaFetchOneQueryResponse, MediaFetchOneQueryVariables>(MEDIA_FETCH_ONE_QUERY);

  const onFetchMedia = async (input: MediaFetchOneQueryVariables): Promise<MediaFragment> => {
    const matchingMedia = await getMedia({ variables: { mediaID: input.mediaID } })
    return matchingMedia.data!.media;
  }

  return {
    fetch: onFetchMedia,
    error,
    loading,
    data: data?.media,
  }
}