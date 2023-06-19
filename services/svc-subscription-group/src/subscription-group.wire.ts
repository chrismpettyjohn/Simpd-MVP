import {SubscriptionGroupWire} from '@simpd/lib-client';
import {SubscriptionGroupEntity} from './subscription-group.entity';
import {convertCentsToDollarsAndCents} from '@simpd/lib-api';

export function subscriptionGroupEntityToSubscriptionGroupWire(
  subscriptionGroupEntity: SubscriptionGroupEntity
): SubscriptionGroupWire {
  return {
    id: subscriptionGroupEntity.id!,
    name: subscriptionGroupEntity.name,
    description: subscriptionGroupEntity.description,
    monthlyCostInCents: subscriptionGroupEntity.monthlyCostInCents,
    monthlyCostInDollarsAndCents: convertCentsToDollarsAndCents(
      subscriptionGroupEntity.monthlyCostInCents
    ),
  };
}
