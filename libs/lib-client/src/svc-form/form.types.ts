export interface Form {
  id: number;
  email: string;
}

export interface FormFindOneInput {
  id: number;
}

export interface FormService {
  findOneByID(input: FormFindOneInput): Form | null;
}
