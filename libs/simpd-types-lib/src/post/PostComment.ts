import {Timestamp} from '../utility/Timestamp';

export interface PostComment {
  id: number;
  postID: number;
  userID: number;
  comment: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export const examplePostComment: PostComment = {
  id: 1,
  postID: 1,
  userID: 1,
  comment: '',
  createdAt: '',
  updatedAt: '',
};
