import { useLazyQuery } from "@apollo/client";
import { MEDIA_FETCH_ONE_QUERY, MediaFetchOneQueryResponse, MediaFetchOneQueryVariables } from "graphql/queries/media-fetch-one.query";


export interface UseFetchMediaQueryResponse {
  fetch(input: MediaFetchOneQueryVariables): Promise<MediaFetchOneQueryResponse>;
  error?: Error;
  loading: boolean;
  data?: MediaFetchOneQueryResponse;
}

export function useMediaFetchOne(): UseFetchMediaQueryResponse {
  const [getMedia, { loading, error, data }] = useLazyQuery<MediaFetchOneQueryResponse, MediaFetchOneQueryVariables>(MEDIA_FETCH_ONE_QUERY);

  const onFetchMedia = async (input: MediaFetchOneQueryVariables): Promise<MediaFetchOneQueryResponse> => {
    const matchingMedia = await getMedia({ variables: { mediaID: input.mediaID } })
    return matchingMedia.data!;
  }

  return {
    fetch: onFetchMedia,
    error,
    loading,
    data,
  }
}