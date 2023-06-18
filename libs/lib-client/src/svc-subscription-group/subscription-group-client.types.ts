export interface SubscriptionGroupWire {
  id: number;
  name: string;
  description: string;
  monthlyCost: number;
}

export interface SubscriptionGroupCreateOneInput {
  name: string;
  description: string;
  monthlyCost: number;
}

export interface SubscriptionGroupFindOneInput {
  id?: number;
}
