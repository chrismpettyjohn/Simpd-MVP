export interface Comment {
  id: number;
  email: string;
}

export interface CommentFindOneInput {
  id: number;
}

export interface CommentService {
  findOneByID(input: CommentFindOneInput): Comment | null;
}
