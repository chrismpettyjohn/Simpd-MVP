import gql from "graphql-tag";
import { POST_WITH_ALBUM_FRAGMENT, POST_WITH_IMAGE_FRAGMENT, POST_WITH_SHARED_CONTENT_FRAGMENT, POST_WITH_TEXT_FRAGMENT, POST_WITH_VIDEO_FRAGMENT, PostWithTextFragment } from "../fragments/post.fragment";

export interface PostFetchOneInput {
  id?: number;
}

export interface PostFetchOneQueryVariables {
  filter: PostFetchOneInput;
}

export interface PostFetchOneQueryResponse {
  post: PostWithTextFragment;
}

export const POST_FETCH_ONE_QUERY = gql`
  ${POST_WITH_TEXT_FRAGMENT}
  ${POST_WITH_IMAGE_FRAGMENT}
  ${POST_WITH_VIDEO_FRAGMENT}
  ${POST_WITH_ALBUM_FRAGMENT}
  ${POST_WITH_SHARED_CONTENT_FRAGMENT}
  query($filter: PostFilterByOneInput!) {
    post(
      filter: $filter
    ) {
      ...on PostWithTextModel {
        ...PostWithTextFragment
      }
      ...on PostWithImageModel {
        ...PostWithImageFragment
      }
      ...on PostWithVideoModel {
        ...PostWithVideoFragment
      }
      ...on PostWithAlbumModel {
      ...PostWithAlbumFragment
      }
      ...on PostWithSharedContentModel {
        ...PostWithSharedContentFragment
      }
    }
  }
`