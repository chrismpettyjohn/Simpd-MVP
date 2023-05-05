export enum ReactionType {
  Like = 'like',
}

export interface ReactionWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  reaction: ReactionType;
  userID: number;
}

export interface ReactionFindOneInput {
  id?: number;
}
