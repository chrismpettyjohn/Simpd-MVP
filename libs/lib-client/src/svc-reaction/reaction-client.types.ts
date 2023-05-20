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
}

export interface ReactionFindManyInput {
  serviceKey: string;
  ids?: number[];
  resourceIDs?: number[];
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
