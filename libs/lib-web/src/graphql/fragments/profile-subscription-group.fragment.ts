import gql from "graphql-tag";
import { SUBSCRIPTION_GROUP_FRAGMENT, SubscriptionGroupFragment } from "./subscription-group.fragment";

export const PROFILE_SUBSCRIPTION_GROUP_FRAGMENT = gql`
  ${SUBSCRIPTION_GROUP_FRAGMENT}
  fragment ProfileSubscriptionGroupFragment on ProfileSubscriptionGroupModel {
    id
    profileID
    subscriptionGroupID
    subscriptionGroup {
      ...SubscriptionGroupFragment
    }
  }
`

export interface ProfileSubscriptionGroupFragment {
  id: number;
  profileID: number;
  subscriptionGroupID: number;
  subscriptionGroup: SubscriptionGroupFragment;
}