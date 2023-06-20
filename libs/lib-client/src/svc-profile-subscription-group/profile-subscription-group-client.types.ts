export interface ProfileSubscriptionGroupWire {
  id: number;
  profileID: number;
  name: string;
  description: string;
  monthlyCostInCents: number;
  monthlyCostInDollarsAndCents: string;
}

export interface ProfileSubscriptionGroupCreateOneInput {
  profileID: number;
  name: string;
  description: string;
  monthlyCostInCents: number;
  monthlyCostInDollarsAndCents: string;
}

export interface ProfileSubscriptionGroupFindOneInput {
  profileID: number;
}

export interface ProfileSubscriptionGroupFindManyInput {
  profileIDs: number[];
}
