import gql from "graphql-tag";
import { PROFILE_SUBSCRIPTION_GROUP_FRAGMENT, ProfileSubscriptionGroupFragment } from "../fragments/profile-subscription-group.fragment";

export interface ProfileSubscriptionGroupFetchManyInput {
  profileIDs?: number[];
}

export interface ProfileSubscriptionGroupFetchManyQueryVariables {
  filter: ProfileSubscriptionGroupFetchManyInput;
}

export interface ProfileSubscriptionGroupFetchManyQueryResponse {
  profileSubscriptionGroups: ProfileSubscriptionGroupFragment[];
}

export const PROFILE_SUBSCRIPTION_GROUP_FETCH_MANY_QUERY = gql`
  ${PROFILE_SUBSCRIPTION_GROUP_FRAGMENT}
  query($filter: ProfileSubscriptionGroupFilterByManyInput!) {
    profileSubscriptionGroups(
      filter: $filter
    ) {
      ...ProfileSubscriptionGroupFragment
    }
  }
`