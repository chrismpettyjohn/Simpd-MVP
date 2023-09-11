export interface ProfileSubscriptionGroupMembershipWire {
  id: number;
  profileID: number;
  subscriptionGroupID: number;
  autoRenew: boolean;
  renewsOn: Date;
}

export interface ProfileSubscriptionGroupMembershipCreateOneInput {
  profileID: number;
  subscriptionGroupID: number;
  autoRenew: boolean;
  renewsOn: Date;
}

export interface ProfileSubscriptionGroupMembershipFindOneInput {
  profileID?: number;
  subscriptionGroupID?: number;
}

export interface ProfileSubscriptionGroupMembershipFindManyInput {
  profileIDs: number[];
  subscriptionGroupIDs?: number[];
}

export interface ProfileSubcriptionGroupMembershipWasCreatedMessage {
  recipientProfileID: number;
  subscriberProfileID: number;
  subscriptionGroupID: number;
}
