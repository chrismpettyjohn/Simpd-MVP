import gql from "graphql-tag";
import { ALBUM_FRAGMENT } from "graphql/fragments/album.fragment";
import { AlbumCreateInput } from "graphql/mutation/album-create-one.mutation";
import { AlbumFindOneInput } from "graphql/queries/album-fetch-one.query";

export const ALBUM_UPDATE_ONE_MUTATION: any = gql`
  ${ALBUM_FRAGMENT}
  mutation($filter: AlbumFindOneInput!, $input: AlbumUpdateOneInput!) {
    albumUpdate(filter: $filter, input: $input) {
      success
    }
  }
`

export type AlbumUpdateOneInput = Partial<AlbumCreateInput>;

export interface AlbumUpdateOneMutationVariables {
  filter: AlbumFindOneInput;
  input: AlbumUpdateOneInput
}

export interface AlbumUpdateOneMutationResponse {
  success: boolean;
}