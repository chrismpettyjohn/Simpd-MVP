import gql from "graphql-tag";
import { POST_WITH_ALBUM_FRAGMENT, PostWithAlbumFragment } from "../fragments/post.fragment";

export interface PostWithAlbumCreateInput {
  content: string;
  mediaIDs: number[];
}

export interface PostWithAlbumCreateMutationVariables {
  input: PostWithAlbumCreateInput;
}

export interface PostWithAlbumCreateMutationResponse {
  postWithAlbumCreate: PostWithAlbumFragment;
}

export const POST_WITH_ALBUM_CREATE_MUTATION = gql`
  ${POST_WITH_ALBUM_FRAGMENT}
  mutation($input: PostWithAlbumCreateInput!) {
    postWithAlbumCreate(
      input: $input
    ) {
      ...PostWithAlbumFragment
    }
  }
`