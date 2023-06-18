import { useMutation } from "@apollo/client";
\import { ProfileSubscriptionGroupFragment } from "../fragments/profile-subscription-group.fragment";
import { PROFILE_SUBSCRIPTION_GROUP_CREATE_MUTATION, ProfileSubscriptionGroupCreateMutationResponse, ProfileSubscriptionGroupCreateMutationVariables } from "../mutation/profile-subscription-group-create-one.mutation";

export interface UseProfileSubscriptionGroupCreateResponse {
  execute(input: ProfileSubscriptionGroupCreateMutationVariables): Promise<ProfileSubscriptionGroupFragment>;
  error?: Error;
  loading: boolean;
  data?: ProfileSubscriptionGroupFragment;
}

export function useProfileSubscriptionGroupCreate(): UseProfileSubscriptionGroupCreateResponse {
  const [createProfileSubscriptionGroup, { loading, error, data }] = useMutation<ProfileSubscriptionGroupCreateMutationResponse, ProfileSubscriptionGroupCreateMutationVariables>(PROFILE_SUBSCRIPTION_GROUP_CREATE_MUTATION);

  const onCreateProfileSubscriptionGroup = async (input: ProfileSubscriptionGroupCreateMutationVariables) => {
    const newProfileSubscriptionGroup = await createProfileSubscriptionGroup({
      variables: input
    })
    return newProfileSubscriptionGroup.data!.profileSubscriptionGroup;
  }

  return {
    execute: onCreateProfileSubscriptionGroup,
    error,
    loading,
    data: data?.profileSubscriptionGroup,
  }
}