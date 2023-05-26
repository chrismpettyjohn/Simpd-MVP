import { ProfileModel } from '../svc-profile/profile.model';

export enum PostCommentType {
  Text = 'text',
  Image = 'image',
  Video = 'video',
  Album = 'album',
  SharedContent = 'shared_content',
}

export interface BasePostComment {
  id: number;
  profileID: number;
  profile: ProfileModel;
  type: PostCommentType;
}

export interface BasePostCommentWithText {
  type: PostCommentType.Text;
  content: string;
}

export type PostCommentWithTextWire = BasePostComment & BasePostCommentWithText;

export interface BasePostCommentWithImage {
  type: PostCommentType.Image;
  mediaID: number;
  content: string;
}

export type PostCommentWithImageWire = BasePostComment & BasePostCommentWithImage;

export interface BasePostCommentWithAlbum {
  type: PostCommentType.Album;
  mediaIDs: number[];
  content: string;
}

export type PostCommentWithAlbumWire = BasePostComment & BasePostCommentWithAlbum;

export interface BasePostCommentWithVideo {
  type: PostCommentType.Video;
  mediaID: number;
  content: string;
}

export type PostCommentWithVideoWire = BasePostComment & BasePostCommentWithVideo;

export interface BasePostCommentWithSharedContent {
  type: PostCommentType.SharedContent;
  postID: number;
  content: string;
}

export type PostCommentWithSharedContentWire = BasePostComment & BasePostCommentWithSharedContent;

export type PostCommentSubset =
  | PostCommentWithTextWire
  | PostCommentWithImageWire
  | PostCommentWithVideoWire
  | PostCommentWithAlbumWire
  | PostCommentWithSharedContentWire;

export type PostCommentWire = BasePostComment & PostCommentSubset;

export interface PostCommentFindOneInput {
  id: number;
}
