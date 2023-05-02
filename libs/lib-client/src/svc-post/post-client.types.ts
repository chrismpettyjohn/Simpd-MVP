export enum PostType {
  Text = 'text',
}

export interface BasePost {
  id: number;
  userID: number;
  type: PostType;
}

export interface BasePostWithText {
  type: PostType.Text;
  content: string;
}

export type PostWithTextWire = BasePost & BasePostWithText;

export type PostSubset = PostWithTextWire;

export type PostWire = BasePost & PostSubset;

export interface PostFindOneInput {
  id: number;
}
