import {ReactionType} from '../svc-reaction/reaction-client.types';

export interface MessageReactionWire {
  id: number;
  commentID: number;
  profileID: number;
  reaction: ReactionType;
}

export interface MessageReactionFindManyInput {
  ids?: number[];
  commentIDs: number[];
  profileIDs?: number[];
}
