import {ProfileSubscriptionGroupWire} from '@simpd/lib-client';
import {ProfileSubscriptionGroupEntity} from './profile-subscription-group.entity';

export function subscriptionGroupEntityToProfileSubscriptionGroupWire(
  subscriptionGroupEntity: ProfileSubscriptionGroupEntity
): ProfileSubscriptionGroupWire {
  return {
    id: subscriptionGroupEntity.id!,
    profileID: subscriptionGroupEntity.profileID,
    subscriptionGroupID: subscriptionGroupEntity.subscriptionGroupID,
  };
}
