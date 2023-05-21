import { useLazyQuery } from "@apollo/client";
import { ProfileFragment } from "../fragments/profile.fragment";
import { PROFILE_FETCH_ONE_QUERY, ProfileFetchOneInput, ProfileFetchOneQueryResponse, ProfileFetchOneQueryVariables } from "../queries/profile-fetch-one.query";

export interface UseProfileFetchOneQueryResponse {
  fetch(filter: ProfileFetchOneInput): Promise<ProfileFragment>;
  error?: Error;
  loading: boolean;
  data?: ProfileFragment;
}

export function useProfileFetchOne(): UseProfileFetchOneQueryResponse {
  const [getProfile, { loading, error, data }] = useLazyQuery<ProfileFetchOneQueryResponse, ProfileFetchOneQueryVariables>(PROFILE_FETCH_ONE_QUERY);

  const onFetchProfile = async (filter: ProfileFetchOneInput) => {
    const matchingProfiles = await getProfile({ variables: { filter } });
    return matchingProfiles.data!.profile;
  }

  return {
    fetch: onFetchProfile,
    error,
    loading,
    data: data?.profile,
  }
}