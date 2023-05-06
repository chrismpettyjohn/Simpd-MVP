export interface UserWire {
  id: number;
  email: string;
  roleID: number;
  subscriptionGroupIDs: number[];
}

export interface UserFindOneInput {
  id: number;
}
