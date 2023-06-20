export interface SubscriptionGroupWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  name: string;
  description: string;
  monthlyCostInCents: number;
  monthlyCostInDollarsAndCents: string;
}

export interface SubscriptionGroupCreateOneInput {
  serviceKey: string;
  resourceID: number;
  name: string;
  description: string;
  monthlyCostInDollarsAndCents: string;
}

export interface SubscriptionGroupFindOneInput {
  serviceKey: string;
  resourceID: number;
}

export interface SubscriptionGroupFindManyInput {
  serviceKey: string;
  resourceIDs: number[];
}
