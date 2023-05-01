export interface User {
  id: number;
  email: string;
}

export interface UserFindOneInput {
  id: number;
}

export interface UserService {
  GetUser(input: UserFindOneInput): User | null;
}
