export interface AWS {
  id: number;
  email: string;
}

export interface AWSFindOneInput {
  id: number;
}

export interface AWSService {
  findOneByID(input: AWSFindOneInput): AWS | null;
}
