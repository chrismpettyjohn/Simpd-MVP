export interface RoleWire {
  id: number;
  name: string;
  scopes: RoleScopesWire;
}

export interface RoleScopesWire {
  profileCreate: boolean;
  bypassUserPrivacy: boolean;
}

export type RoleScopes = keyof RoleScopesWire;

export interface RoleFindOneInput {
  id: number;
}
