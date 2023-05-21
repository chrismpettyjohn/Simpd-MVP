import gql from "graphql-tag";
import { POST_WITH_ALBUM_FRAGMENT, POST_WITH_IMAGE_FRAGMENT, POST_WITH_TEXT_FRAGMENT, POST_WITH_VIDEO_FRAGMENT, PostWithTextFragment } from "../fragments/post.fragment";

export interface PostFetchOneQueryVariables {
  id: number;
}

export interface PostFetchOneQueryResponse {
  post: PostWithTextFragment;
}

export const POST_FETCH_ONE_QUERY = gql`
  ${POST_WITH_TEXT_FRAGMENT}
  ${POST_WITH_IMAGE_FRAGMENT}
  ${POST_WITH_VIDEO_FRAGMENT}
  ${POST_WITH_ALBUM_FRAGMENT}
  query($id: Float!) {
    post(
      filter: {
        id: $id
      }
    ) {
      ...PostWithTextFragment
      ...PostWithImageFragment
      ...PostWithVideoFragment
      ...PostWithAlbumFragment
    }
  }
`