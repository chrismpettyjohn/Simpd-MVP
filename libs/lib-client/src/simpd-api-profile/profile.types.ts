export interface Profile {
  id: number;
  email: string;
}

export interface ProfileFindOneInput {
  id: number;
}

export interface ProfileService {
  findOneByID(input: ProfileFindOneInput): Profile | null;
}
