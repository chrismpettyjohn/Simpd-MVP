import { useLazyQuery } from "@apollo/client";
import { ProfileSubscriptionGroupFragment } from "../fragments/profile-subscription-group.fragment";
import { PROFILE_SUBSCRIPTION_GROUP_FETCH_MANY_QUERY, ProfileSubscriptionGroupFetchManyInput, ProfileSubscriptionGroupFetchManyQueryResponse, ProfileSubscriptionGroupFetchManyQueryVariables } from "../queries/profile-subscription-group-fetch-many.query";


export interface UseProfileSubscriptionGroupFetchManyQueryResponse {
  fetch(filter: ProfileSubscriptionGroupFetchManyInput): Promise<ProfileSubscriptionGroupFragment[]>;
  error?: Error;
  loading: boolean;
  data?: ProfileSubscriptionGroupFragment[];
}

export function useProfileSubscriptionGroupFetchMany(): UseProfileSubscriptionGroupFetchManyQueryResponse {
  const [getProfileSubscriptionGroups, { loading, error, data }] = useLazyQuery<ProfileSubscriptionGroupFetchManyQueryResponse, ProfileSubscriptionGroupFetchManyQueryVariables>(PROFILE_SUBSCRIPTION_GROUP_FETCH_MANY_QUERY);

  const onFetchProfileSubscriptionGroups = async (filter: ProfileSubscriptionGroupFetchManyInput) => {
    const matchingProfileSubscriptionGroups = await getProfileSubscriptionGroups({ variables: { filter } })
    return matchingProfileSubscriptionGroups.data!.profileSubscriptionGroups;
  }

  return {
    fetch: onFetchProfileSubscriptionGroups,
    error,
    loading,
    data: data?.profileSubscriptionGroups,
  }
}