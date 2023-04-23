import {Timestamp} from '../utility/Timestamp';

export enum PostReactionType {
  Like = 'like',
  Love = 'love',
  Sad = 'sad',
  Angry = 'Angry',
}

export interface PostReactionWire {
  id: number;
  postID: number;
  userID: number;
  reaction: PostReactionType;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export const examplePostReaction: PostReactionWire = {
  id: 1,
  postID: 1,
  userID: 1,
  reaction: PostReactionType.Angry,
  createdAt: '',
  updatedAt: '',
};
