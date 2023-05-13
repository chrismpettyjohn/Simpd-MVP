export interface UserWire {
  id: number;
  email: string;
  roleID: number;
}

export interface UserFindOneInput {
  id?: number;
  email?: string;
}

export type UserFindOneResponse = UserWire;

export interface UserPasswordComparisonInput {
  id: number;
  password: string;
}

export interface UserPasswordComparisonResponse {
  id: number;
  matching: boolean;
}
