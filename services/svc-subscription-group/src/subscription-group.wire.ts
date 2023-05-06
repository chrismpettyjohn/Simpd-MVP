import {SubscriptionGroupWire} from '@simpd/lib-client';
import {SubscriptionGroupEntity} from './subscription-group.entity';

export function subscriptionGroupEntityToSubscriptionGroupWire(
  subscriptionGroupEntity: SubscriptionGroupEntity
): SubscriptionGroupWire {
  return {
    id: subscriptionGroupEntity.id!,
    profileID: subscriptionGroupEntity.profileID,
    name: subscriptionGroupEntity.name,
    description: subscriptionGroupEntity.description,
  };
}
