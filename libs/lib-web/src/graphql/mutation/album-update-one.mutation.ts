import gql from "graphql-tag";
import { ALBUM_FRAGMENT } from "graphql/fragments/album.fragment";
import { AlbumFetchOneInput } from "graphql/queries/album-fetch-one.query";

export const ALBUM_UPDATE_ONE_MUTATION: any = gql`
  ${ALBUM_FRAGMENT}
  mutation($filter, AlbumFetchOneInput!, $input: AlbumUpdateOneInput!) {
    albumUpdate(filter: $filter, input: $input) {
      success
    }
  }
`


export interface AlbumUpdateOneMutationVariables {
  filter: AlbumFetchOneInput;
  input: AlbumFetchOneInput;
}

export interface AlbumUpdateOneMutationResponse {
  success: boolean;
}