export interface ProfileWire {
  id: number;
  userID: number;
  username: string;
  displayName: string;
  biography: string;
  location: string;
  websiteURL: string;
  wishlistURL: string;
  subscriptionGroupIDs: number[];
}

export interface ProfileFindOneInput {
  id?: number;
  username?: string;
}

export interface ProfileFindManyInput {
  userID?: number;
}
