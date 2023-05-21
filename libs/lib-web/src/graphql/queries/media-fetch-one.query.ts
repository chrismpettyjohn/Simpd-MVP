import gql from "graphql-tag";
import { MEDIA_FRAGMENT, MediaFragment } from "../fragments/media.fragment";

export interface MediaFetchOneInput {
  id?: number;
}

export interface MediaFetchOneQueryVariables {
  filter: MediaFetchOneInput;
}

export interface MediaFetchOneQueryResponse {
  media: MediaFragment;
}

export const MEDIA_FETCH_ONE_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query($filter: MediaFilterByOneInput!) {
    media(
      filter: $filter
    ) {
      ...MediaFragment
    }
  }
`