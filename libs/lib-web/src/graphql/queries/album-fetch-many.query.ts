import gql from "graphql-tag";
import { ALBUM_FRAGMENT, AlbumFragment } from "graphql/fragments/album.fragment";

export const ALBUM_FETCH_MANY_QUERY: any = gql`
  ${ALBUM_FRAGMENT}
  query($filter: AlbumFetchManyInput!) {
    albums($filter) {
      ...AlbumFragment
    }
  }
`

export interface AlbumFetchManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface AlbumFetchManyQueryVariables {
  filter: AlbumFetchManyInput
}

export interface AlbumFetchManyQueryResponse {
  albums: AlbumFragment[];
}