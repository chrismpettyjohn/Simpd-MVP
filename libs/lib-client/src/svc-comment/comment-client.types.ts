export interface CommentWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  comment: string;
  profileID: number;
}

export interface CommentFindOneInput {
  id?: number;
}
