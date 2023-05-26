export interface CommentWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  content: string;
  profileID: number;
}

export interface CommentFindOneInput {
  serviceKey: string;
  id?: number;
  resourceID?: number;
  profileID?: number;
}

export interface CommentFindManyInput {
  serviceKey: string;
  ids?: number[];
  resourceIDs?: number[];
  profileIDs?: number[];
}

export interface CommentCreateOneInput {
  serviceKey: string;
  resourceID: number;
  profileID: number;
  content: string;
}

export interface CommentUpdateInputInput {
  content: string;
}

export interface CommentMutationResponse {
  success: boolean;
}
