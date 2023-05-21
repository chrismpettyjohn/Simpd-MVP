export enum ReactionType {
  Like = 'like',
}

export interface ReactionWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  reaction: ReactionType;
  profileID: number;
}

export interface ReactionFindOneInput {
  serviceKey: string;
  id?: number;
  resourceID?: number;
  profileID?: number;
}

export interface ReactionFindManyInput {
  serviceKey: string;
  ids?: number[];
  resourceIDs?: number[];
  profileIDs?: number[];
}

export interface ReactionCreateOneInput {
  serviceKey: string;
  resourceID: number;
  reaction: ReactionType;
  profileID: number;
}

export interface ReactionCreateOneResponse {
  success: boolean;
  reaction?: ReactionWire;
}

export interface ReactionDeleteOneResponse {
  success: boolean;
}
