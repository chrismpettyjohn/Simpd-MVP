export interface SubscriptionGroup {
  id: number;
  email: string;
}

export interface SubscriptionGroupFindOneInput {
  id: number;
}

export interface SubscriptionGroupService {
  findOneByID(input: SubscriptionGroupFindOneInput): SubscriptionGroup | null;
}
