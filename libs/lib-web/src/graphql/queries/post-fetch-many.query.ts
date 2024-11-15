import gql from "graphql-tag";
import { POST_WITH_ALBUM_FRAGMENT, POST_WITH_IMAGE_FRAGMENT, POST_WITH_SHARED_CONTENT_FRAGMENT, POST_WITH_TEXT_FRAGMENT, POST_WITH_VIDEO_FRAGMENT, PostFragment, PostWithTextFragment } from "../fragments/post.fragment";

export interface PostFetchManyQueryVariables {
  ids?: number[];
  profileIDs?: number[];
}

export interface PostFetchManyQueryResponse {
  posts: PostFragment[];
}

export const POST_FETCH_MANY_QUERY = gql`
  ${POST_WITH_TEXT_FRAGMENT}
  ${POST_WITH_IMAGE_FRAGMENT}
  ${POST_WITH_VIDEO_FRAGMENT}
  ${POST_WITH_ALBUM_FRAGMENT}
  ${POST_WITH_SHARED_CONTENT_FRAGMENT}
  query($profileIDs: [Float!]) {
    posts(
      filter: {
        profileIDs: $profileIDs
      }
    ) {
      ...PostWithTextFragment
      ...PostWithImageFragment
      ...PostWithVideoFragment
      ...PostWithAlbumFragment
      ...PostWithSharedContentFragment
    }
  }
`