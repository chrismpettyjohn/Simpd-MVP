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
  id?: number;
  serviceKey: string;
  resourceID?: number;
  name?: string;
  description?: string;
}

export interface SubscriptionGroupFindManyInput {
  ids?: number[];
  serviceKey: string;
  resourceIDs?: number[];
  names?: string[];
  descriptions?: string[];
}