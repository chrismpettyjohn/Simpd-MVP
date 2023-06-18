import gql from "graphql-tag";
import { MEDIA_FRAGMENT, MediaFragment } from "../fragments/media.fragment";

export interface MediaFetchManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface MediaFetchManyQueryVariables {
  filter: MediaFetchManyInput;
}

export interface MediaFetchManyQueryResponse {
  medias: MediaFragment[];
}

export const MEDIA_FETCH_MANY_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query($filter: MediaFilterByManyInput!) {
    medias(
      filter: $filter
    ) {
      ...MediaFragment
    }
  }
`