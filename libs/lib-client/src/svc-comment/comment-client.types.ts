export interface CommentWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  comment: string;
  userID: number;
}

export interface CommentFindOneInput {
  id?: number;
}
