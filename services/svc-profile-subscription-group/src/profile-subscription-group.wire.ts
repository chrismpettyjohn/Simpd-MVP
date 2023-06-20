import {
  ProfileSubscriptionGroupWire,
  SubscriptionGroupWire,
} from '@simpd/lib-client';

export function subscriptionGroupWireToProfileSubscriptionGroupWire(
  subscriptionGroupWire: SubscriptionGroupWire
): ProfileSubscriptionGroupWire {
  return {
    id: subscriptionGroupWire.id!,
    profileID: subscriptionGroupWire.resourceID,
    name: subscriptionGroupWire.name,
    description: subscriptionGroupWire.description,
    monthlyCostInCents: subscriptionGroupWire.monthlyCostInCents,
    monthlyCostInDollarsAndCents:
      subscriptionGroupWire.monthlyCostInDollarsAndCents,
  };
}
