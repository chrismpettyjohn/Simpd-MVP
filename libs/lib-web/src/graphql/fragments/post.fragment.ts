import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export enum PostType {
  Text = 'Text',
  Image = 'Image',
  Video = 'Video',
  Album = 'Album',
  SharedContent = 'SharedContent',
}

interface PostBaseFragment {
  id: number;
  profileID: number;
  profile: ProfileFragment;
  type: PostType;
  content: string;
  tagIDs?: number[];
}

export const POST_WITH_TEXT_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostWithTextFragment on PostWithTextModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment
    }
    content
    tagIDs
  }
`

export interface PostWithTextFragment extends PostBaseFragment {
  type: PostType.Text;
  content: string;
}

export const POST_WITH_IMAGE_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostWithImageFragment on PostWithImageModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment
    }
    content
    tagIDs
    mediaID
  }
`

export interface PostWithImageFragment extends PostBaseFragment {
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
      ...ProfileFragment
    }
    content
    tagIDs
    mediaID
  }
`

export interface PostWithVideoFragment extends PostBaseFragment {
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
      ...ProfileFragment
    }
    content
    mediaIDs
  }
`

export interface PostWithAlbumFragment extends PostBaseFragment {
  type: PostType.Album;
  content: string;
  mediaIDs: number[];
}

export const POST_WITH_SHARED_CONTENT_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostWithSharedContentFragment on PostWithSharedContentModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment
    }
    content
    tagIDs
    postID
  }
`

export interface PostWithSharedContentFragment extends PostBaseFragment {
  type: PostType.SharedContent;
  content: string;
  postID: number;
}

export type PostFragment = PostBaseFragment | PostWithTextFragment | PostWithImageFragment | PostWithVideoFragment | PostWithAlbumFragment | PostWithSharedContentFragment;