import {PostType} from './PostType';
import {PostReactionWire} from './PostReaction';
import {Timestamp} from '../utility/Timestamp';

export interface PostWire {
  id: number;
  userID: number;
  type: PostType;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  reactions: PostReactionWire[];
}
