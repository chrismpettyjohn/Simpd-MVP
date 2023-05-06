export interface SubscriptionGroupWire {
  id: number;
  key: string;
  name: string;
  description: string;
}

export interface SubscriptionGroupFindOneInput {
  id?: number;
  key?: string;
}
