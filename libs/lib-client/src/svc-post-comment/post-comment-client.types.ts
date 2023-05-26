export interface PostCommentWire {
  id: number;
  postID: number;
  profileID: number;
  content: string;
}

export interface PostCommentFindOneInput {
  id?: number;
  postID?: number;
  profileID?: number;
}

export interface PostCommentFindManyInput {
  ids?: number[];
  postIDs: number[];
  profileIDs?: number[];
}

export interface PostCommentCreateOneInput {
  postID: number;
  profileID: number;
  content: string;
}

export interface PostCommentUpdateOneInput {
  content: string;
}

export interface PostCommentMutationResponse {
  success: boolean;
}
