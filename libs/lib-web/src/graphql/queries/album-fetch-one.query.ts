import gql from "graphql-tag";
import { ALBUM_FRAGMENT, AlbumFragment } from "graphql/fragments/album.fragment";

export const ALBUM_FETCH_ONE_QUERY: any = gql`
  ${ALBUM_FRAGMENT}
  query($filter: AlbumFindOneInput!) {
    album(filter: $filter) {
      ...AlbumFragment
    }
  }
`

export interface AlbumFindOneInput {
  id: number;
}

export interface AlbumFetchOneQueryVariables {
  filter: AlbumFindOneInput
}

export interface AlbumFetchOneQueryResponse {
  album: AlbumFragment;
}