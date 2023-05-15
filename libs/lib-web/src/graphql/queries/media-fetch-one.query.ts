import gql from "graphql-tag";
import { MEDIA_FRAGMENT, MediaFragment } from "graphql/fragments/media.fragment";

export interface MediaFetchOneQueryVariables {
  mediaID: number;
}

export interface MediaFetchOneQueryResponse {
  media: MediaFragment;
}

export const MEDIA_FETCH_ONE_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query($mediaID: Float!) {
    media(
      filter: {
        id: $mediaID
      }
    ) {
      ...MediaFragment
    }
  }
`