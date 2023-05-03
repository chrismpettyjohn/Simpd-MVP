export interface Reaction {
  id: number;
  email: string;
}

export interface ReactionFindOneInput {
  id: number;
}

export interface ReactionService {
  findOneByID(input: ReactionFindOneInput): Reaction | null;
}
