export interface SubscriptionGroupWire<
  Service extends SubscriptionGroupServiceKey
> {
  id: number;
  serviceKey: Service;
  resourceID: number;
  name: string;
  description: string;
  monthlyCostInCents: number;
  monthlyCostInDollarsAndCents: string;
}

export interface SubscriptionGroupCreateOneInput<
  Service extends SubscriptionGroupServiceKey
> {
  serviceKey: Service;
  resourceID: number;
  name: string;
  description: string;
  monthlyCostInDollarsAndCents: string;
}

export enum SubscriptionGroupServiceKey {
  Profile = 'profile',
}

export interface SubscriptionGroupFindOneInput<
  Service extends SubscriptionGroupServiceKey
> {
  id?: number;
  serviceKey: Service;
  resourceID?: number;
}

export interface SubscriptionGroupFindManyInput<
  Service extends SubscriptionGroupServiceKey
> {
  serviceKey: Service;
  resourceIDs: number[];
}
