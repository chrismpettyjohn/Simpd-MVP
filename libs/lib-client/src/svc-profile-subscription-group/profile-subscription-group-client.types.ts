export interface ProfileSubscriptionGroupWire {
  id: number;
  profileID: number;
  subscriptionGroupID: number;
}

export interface ProfileSubscriptionGroupCreateOneInput {
  profileID: number;
  subscriptionGroupID: number;
}

export interface ProfileSubscriptionGroupFindOneInput {
  id?: number;
  profileID?: number;
  subscriptionGroupID?: number;
}

export interface ProfileSubscriptionGroupFindManyInput {
  ids?: number[];
  profileIDs?: number[];
  subscriptionGroupIDs?: number[];
}
