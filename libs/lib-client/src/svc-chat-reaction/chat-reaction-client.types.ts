import {ReactionType} from '../svc-reaction/reaction-client.types';

export interface ChatReactionWire {
  id: number;
  chatID: number;
  profileID: number;
  reaction: ReactionType;
}

export interface ChatReactionFindManyInput {
  ids?: number[];
  chatIDs: number[];
  profileIDs?: number[];
}
