import gql from "graphql-tag";
import { PROFILE_SUBSCRIPTION_GROUP_FRAGMENT, ProfileSubscriptionGroupFragment } from "../fragments/profile-subscription-group.fragment";

export interface ProfileSubscriptionGroupCreateInput {
  name: string;
  description: string;
  monthlyCost: number;
}

export interface ProfileSubscriptionGroupCreateMutationVariables {
  input: ProfileSubscriptionGroupCreateInput;
}

export interface ProfileSubscriptionGroupCreateMutationResponse {
  profileSubscriptionGroup: ProfileSubscriptionGroupFragment;
}

export const PROFILE_SUBSCRIPTION_GROUP_CREATE_MUTATION = gql`
  ${PROFILE_SUBSCRIPTION_GROUP_FRAGMENT}
  mutation($input: ProfileSubscriptionGroupCreateInput!) {
    profileSubscriptionGroupCreate(
      input: $input
    ) {
      ...ProfileSubscriptionGroupFragment
    }
  }
`