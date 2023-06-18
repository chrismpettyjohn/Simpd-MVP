import {SubscriptionGroupWire} from '@simpd/lib-client';
import {SubscriptionGroupEntity} from './subscription-group.entity';

export function subscriptionGroupEntityToSubscriptionGroupWire(
  subscriptionGroupEntity: SubscriptionGroupEntity
): SubscriptionGroupWire {
  return {
    id: subscriptionGroupEntity.id!,
    name: subscriptionGroupEntity.name,
    description: subscriptionGroupEntity.description,
    monthlyCost: subscriptionGroupEntity.monthlyCost,
  };
}
