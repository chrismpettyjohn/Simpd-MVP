import gql from "graphql-tag";
import { ALBUM_FRAGMENT } from "graphql/fragments/album.fragment";
import { AlbumFindOneInput } from "graphql/queries/album-fetch-one.query";

export const ALBUM_DELETE_ONE_MUTATION: any = gql`
  ${ALBUM_FRAGMENT}
  mutation($filter: AlbumFindOneInput!) {
    albumDelete(filter: $filter) {
      success
    }
  }
`


export interface AlbumDeleteOneMutationVariables {
  filter: AlbumFindOneInput;
}

export interface AlbumDeleteOneMutationResponse {
  success: boolean;
}