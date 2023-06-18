import gql from "graphql-tag";

export const PROFILE_SUBSCRIPTION_GROUP_FRAGMENT = gql`
  fragment ProfileSubscriptionGroupFragment on ProfileSubscriptionGroupModel {
    id
    profileID
    subscriptionGroupID
  }
`

export interface ProfileSubscriptionGroupFragment {
  id: number;
  profileID: number;
  subscriptionGroupID: number;
}