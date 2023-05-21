import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";
import { MEDIA_FRAGMENT } from "./media.fragment";

export enum PostType {
  Text = 'Text',
  Image = 'Image',
  Video = 'Video',
  Album = 'Album',
  SharedContent = 'shared_content',
}

interface BasePost {
  id: number;
  profileID: number;
  profile: ProfileFragment;
}

export const POST_WITH_TEXT_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostWithTextFragment on PostWithTextModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment,
    }
    content
  }
`

export interface PostWithTextFragment extends BasePost {
  type: PostType.Text;
  content: string;
}

export const POST_WITH_IMAGE_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  ${MEDIA_FRAGMENT}
  fragment PostWithImageFragment on PostWithImageModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment,
    }
    content
    mediaID
    media: {
      ...MediaFragment
    }
  }
`

export interface PostWithImageFragment extends BasePost {
  type: PostType.Image;
  content: string;
  mediaID: number;
}

export const POST_WITH_VIDEO_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostWithVideoFragment on PostWithVideoModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment,
    }
    content
    mediaID
    media: {
      ...MediaFragment
    }
  }
`

export interface PostWithVideoFragment extends BasePost {
  type: PostType.Video;
  content: string;
  mediaID: number;
}

export const POST_WITH_ALBUM_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostWithAlbumFragment on PostWithAlbumModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment,
    }
    content
    mediaIDs
  }
`

export interface PostWithAlbumFragment extends BasePost {
  type: PostType.Album;
  content: string;
  mediaIDs: number[];
}

export type PostFragment = PostWithTextFragment;