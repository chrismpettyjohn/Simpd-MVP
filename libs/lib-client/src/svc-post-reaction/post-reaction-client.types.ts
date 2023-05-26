import {ReactionType} from '../svc-reaction/reaction-client.types';

export interface PostReactionWire {
  id: number;
  postID: number;
  profileID: number;
  reaction: ReactionType;
}

export interface PostReactionFindManyInput {
  ids?: number[];
  postIDs: number[];
  profileIDs?: number[];
}
