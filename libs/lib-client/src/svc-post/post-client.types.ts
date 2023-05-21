import {ProfileModel} from '../svc-profile/profile.model';

export enum PostType {
  Text = 'text',
  Image = 'image',
  Video = 'video',
  Album = 'album',
  SharedContent = 'shared_content',
}

export interface BasePost {
  id: number;
  profileID: number;
  profile: ProfileModel;
  type: PostType;
}

export interface BasePostWithText {
  type: PostType.Text;
  content: string;
}

export type PostWithTextWire = BasePost & BasePostWithText;

export interface BasePostWithImage {
  type: PostType.Image;
  mediaID: number;
  content: string;
}

export type PostWithImageWire = BasePost & BasePostWithImage;

export interface BasePostWithAlbum {
  type: PostType.Album;
  mediaIDs: number[];
  content: string;
}

export type PostWithAlbumWire = BasePost & BasePostWithAlbum;

export interface BasePostWithVideo {
  type: PostType.Video;
  mediaID: number;
  content: string;
}

export type PostWithVideoWire = BasePost & BasePostWithVideo;

export enum PostSharedContentType {
  Post = 'post',
  Media = 'media',
}

export interface BasePostWithSharedContent {
  type: PostType.SharedContent;
  resourceType: PostSharedContentType;
  resourceID: number;
  content: string;
}

export type PostWithSharedContentWire = BasePost & BasePostWithSharedContent;

export type PostSubset =
  | PostWithTextWire
  | PostWithImageWire
  | PostWithVideoWire
  | PostWithAlbumWire
  | PostWithSharedContentWire;

export type PostWire = BasePost & PostSubset;

export interface PostFindOneInput {
  id: number;
}
