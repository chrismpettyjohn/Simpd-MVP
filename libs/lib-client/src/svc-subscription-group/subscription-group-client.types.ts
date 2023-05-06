export interface SubscriptionGroupWire {
  id: number;
  profileID: number;
  name: string;
  description: string;
}

export interface SubscriptionGroupFindOneInput {
  id: number;
  profileID: number;
}
