export enum PostType {
  Text = 'text',
  Image = 'image',
  Video = 'video',
}

export interface BasePost {
  id: number;
  profileID: number;
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
  caption: string;
}

export type PostWithImageWire = BasePost & BasePostWithImage;

export interface BasePostWithVideo {
  type: PostType.Video;
  mediaID: number;
  caption: string;
}

export type PostWithVideoWire = BasePost & BasePostWithVideo;

export type PostSubset =
  | PostWithTextWire
  | PostWithImageWire
  | PostWithVideoWire;

export type PostWire = BasePost & PostSubset;

export interface PostFindOneInput {
  id: number;
}
