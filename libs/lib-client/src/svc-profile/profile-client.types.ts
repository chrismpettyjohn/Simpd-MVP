export interface ProfileWire {
  id: number;
  userID: number;
  username: string;
  subscriptionGroupIDs: number[];
}

export interface ProfileFindOneInput {
  id?: number;
  username?: string;
}
