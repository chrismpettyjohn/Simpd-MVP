import {ProfileSubscriptionGroupMembershipMembershipEntity} from './profile-subscription-group-membership.entity';
import {ProfileSubscriptionGroupMembershipWire} from '@simpd/lib-client';

export function subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire(
  subscriptionGroupMembershipWire: ProfileSubscriptionGroupMembershipMembershipEntity
): ProfileSubscriptionGroupMembershipWire {
  return {
    id: subscriptionGroupMembershipWire.id!,
    profileID: subscriptionGroupMembershipWire.profileID,
    subscriptionGroupID: subscriptionGroupMembershipWire.subscriptionGroupID,
    autoRenew: subscriptionGroupMembershipWire.autoRenew,
    renewsOn: subscriptionGroupMembershipWire.renewsOn,
  };
}
