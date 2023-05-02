export interface Post {
  id: number;
  email: string;
}

export interface PostFindOneInput {
  id: number;
}

export interface PostService {
  findOneByID(input: PostFindOneInput): Post | null;
}
