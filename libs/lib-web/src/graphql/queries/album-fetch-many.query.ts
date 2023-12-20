import gql from "graphql-tag";
import { ALBUM_FRAGMENT, AlbumFragment } from "graphql/fragments/album.fragment";

export const ALBUM_FETCH_MANY_QUERY: any = gql`
  ${ALBUM_FRAGMENT}
  query($filter: AlbumFindManyInput!) {
    albums(filter: $filter) {
      ...AlbumFragment
    }
  }
`

export interface AlbumFindManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface AlbumFetchManyQueryVariables {
  filter: AlbumFindManyInput
}

export interface AlbumFetchManyQueryResponse {
  albums: AlbumFragment[];
}