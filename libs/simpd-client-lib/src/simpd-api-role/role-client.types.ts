export interface RoleWire {
  id: number;
  name: string;
  scopes: RoleScopesWire;
}

export interface RoleScopesWire {
  profileCreate: boolean;
}

export interface RoleFindOneInput {
  id: number;
}
