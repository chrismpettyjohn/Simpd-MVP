export interface SubscriptionGroupWire {
  id: number;
  name: string;
  description: string;
  monthlyCostInCents: number;
  monthlyCostInDollarsAndCents: string;
}

export interface SubscriptionGroupCreateOneInput {
  name: string;
  description: string;
  monthlyCostInDollarsAndCents: string;
}

export interface SubscriptionGroupFindOneInput {
  id?: number;
}
