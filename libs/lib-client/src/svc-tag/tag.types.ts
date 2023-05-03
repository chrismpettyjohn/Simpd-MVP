export interface Tag {
  id: number;
  email: string;
}

export interface TagFindOneInput {
  id: number;
}

export interface TagService {
  findOneByID(input: TagFindOneInput): Tag | null;
}
