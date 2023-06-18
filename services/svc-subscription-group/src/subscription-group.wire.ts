import {SubscriptionGroupWire} from '@simpd/lib-client';
import {convertCentsToDollarsAndCents} from './helpers';
import {SubscriptionGroupEntity} from './subscription-group.entity';

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
