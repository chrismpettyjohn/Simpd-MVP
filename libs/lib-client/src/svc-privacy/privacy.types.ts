export interface Privacy {
  id: number;
  email: string;
}

export interface PrivacyFindOneInput {
  id: number;
}

export interface PrivacyService {
  findOneByID(input: PrivacyFindOneInput): Privacy | null;
}
