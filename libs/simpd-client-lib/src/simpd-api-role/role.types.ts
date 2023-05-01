export interface Role {
  id: number;
  name: string;
  description: string;
}

export interface RoleFindOneInput {
  id: number;
}

export interface RoleService {
  GetRole(input: RoleFindOneInput): Role | null;
}
