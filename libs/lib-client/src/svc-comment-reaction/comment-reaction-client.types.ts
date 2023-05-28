import {ReactionType} from '../svc-reaction/reaction-client.types';

export interface CommentReactionWire {
  id: number;
  commentID: number;
  profileID: number;
  reaction: ReactionType;
}

export interface CommentReactionFindManyInput {
  ids?: number[];
  commentIDs: number[];
  profileIDs?: number[];
}
