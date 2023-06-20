import {SubscriptionGroupWire} from '@simpd/lib-client';
import {convertCentsToDollarsAndCents} from '@simpd/lib-api';
import {SubscriptionGroupEntity} from './subscription-group.entity';

export function subscriptionGroupEntityToSubscriptionGroupWire(
  subscriptionGroupEntity: SubscriptionGroupEntity
): SubscriptionGroupWire {
  return {
    id: subscriptionGroupEntity.id!,
    serviceKey: subscriptionGroupEntity.serviceKey,
    resourceID: subscriptionGroupEntity.resourceID,
    name: subscriptionGroupEntity.name,
    description: subscriptionGroupEntity.description,
    monthlyCostInCents: subscriptionGroupEntity.monthlyCostInCents,
    monthlyCostInDollarsAndCents: convertCentsToDollarsAndCents(
      subscriptionGroupEntity.monthlyCostInCents
    ),
  };
}
