export enum PostType {
  Text = 'text',
  Image = 'image',
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

export interface BasePostWithImage {
  type: PostType.Image;
  mediaID: number;
  caption: string;
}

export type PostWithTextWire = BasePost & BasePostWithText;

export type PostWithImageWire = BasePost & BasePostWithImage;

export type PostSubset = PostWithTextWire | PostWithImageWire;

export type PostWire = BasePost & PostSubset;

export interface PostFindOneInput {
  id: number;
}
