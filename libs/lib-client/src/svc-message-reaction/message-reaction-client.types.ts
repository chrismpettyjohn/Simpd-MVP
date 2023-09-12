import {ReactionType} from '../svc-reaction/reaction-client.types';

export interface MessageReactionWire {
  id: number;
  messageID: number;
  profileID: number;
  reaction: ReactionType;
}

export interface MessageReactionFindManyInput {
  ids?: number[];
  messageIDs: number[];
  profileIDs?: number[];
}
export interface MessageReactionFindOneInput {
  id: number;
}

export interface MessageReactionWasCreatedInternalMessage {
  messageReactionID: number;
}
