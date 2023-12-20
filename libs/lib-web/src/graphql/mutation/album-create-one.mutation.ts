import gql from "graphql-tag";
import { ALBUM_FRAGMENT, AlbumFragment } from "graphql/fragments/album.fragment";

export const ALBUM_CREATE_ONE_MUTATION: any = gql`
  ${ALBUM_FRAGMENT}
  mutation($input: AlbumCreateInput!) {
    albumCreate(input: $input) {
      ...AlbumFragment
    }
  }
`

export interface AlbumCreateInput {
  name: string;
  description: string;
}

export interface AlbumCreateOneMutationVariables {
  input: AlbumCreateInput;
}

export interface AlbumCreateOneMutationResponse {
  albumCreate: AlbumFragment;
}