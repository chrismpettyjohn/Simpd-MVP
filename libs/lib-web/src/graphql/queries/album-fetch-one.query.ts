import gql from "graphql-tag";
import { ALBUM_FRAGMENT, AlbumFragment } from "graphql/fragments/album.fragment";

export const ALBUM_FETCH_ONE_QUERY: any = gql`
  ${ALBUM_FRAGMENT}
  query($filter: AlbumFetchOneInput!) {
    album($filter) {
      ...AlbumFragment
    }
  }
`

export interface AlbumFetchOneInput {
  id: number;
}

export interface AlbumFetchOneQueryVariables {
  filter: AlbumFetchOneInput
}

export interface AlbumFetchOneQueryResponse {
  album: AlbumFragment;
}