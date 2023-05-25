import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export enum PostType {
  Text = 'Text',
  Image = 'Image',
  Video = 'Video',
  Album = 'Album',
  SharedContent = 'SharedContent',
}

export const POST_BASE_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostBaseFragment on PostBaseModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment,
    }
    totalShares
    content
  }
`

interface PostBaseFragment {
  id: number;
  profileID: number;
  profile: ProfileFragment;
  totalShares: number;
  type: PostType;
  content: string;
}

export const POST_WITH_TEXT_FRAGMENT = gql`
  ${POST_BASE_FRAGMENT}
  fragment PostWithTextFragment on PostWithTextModel {
    ...PostBaseFragment
  }
`

export interface PostWithTextFragment extends PostBaseFragment {
  type: PostType.Text;
  content: string;
}

export const POST_WITH_IMAGE_FRAGMENT = gql`
  ${POST_BASE_FRAGMENT}
  fragment PostWithImageFragment on PostWithImageModel {
    ...PostBaseFragment
    mediaID
  }
`

export interface PostWithImageFragment extends PostBaseFragment {
  type: PostType.Image;
  content: string;
  mediaID: number;
}

export const POST_WITH_VIDEO_FRAGMENT = gql`
  ${POST_BASE_FRAGMENT}
  fragment PostWithVideoFragment on PostWithVideoModel {
    ...PostBaseFragment
    mediaID
  }
`

export interface PostWithVideoFragment extends PostBaseFragment {
  type: PostType.Video;
  content: string;
  mediaID: number;
}

export const POST_WITH_ALBUM_FRAGMENT = gql`
  ${POST_BASE_FRAGMENT}
  fragment PostWithAlbumFragment on PostWithAlbumModel {
    ...PostBaseFragment
    mediaIDs
  }
`

export interface PostWithAlbumFragment extends PostBaseFragment {
  type: PostType.Album;
  content: string;
  mediaIDs: number[];
}

export const POST_WITH_SHARED_CONTENT_FRAGMENT = gql`
  ${POST_BASE_FRAGMENT}
  fragment PostWithSharedContentFragment on PostWithSharedContentModel {
    ...PostBaseFragment
    postID
  }
`

export interface PostWithSharedContentFragment extends PostBaseFragment {
  type: PostType.SharedContent;
  content: string;
  postID: number;
}

export type PostFragment = PostBaseFragment | PostWithTextFragment | PostWithImageFragment | PostWithVideoFragment | PostWithAlbumFragment | PostWithSharedContentFragment;