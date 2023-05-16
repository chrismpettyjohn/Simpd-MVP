import { useLazyQuery } from "@apollo/client";
import { ProfileFragment } from "graphql/fragments/profile.fragment";
import { PROFILE_FETCH_ONE_QUERY, ProfileFetchOneQueryResponse, ProfileFetchOneQueryVariables } from "graphql/queries/profile-fetch-one.query";

export interface UseProfileFetchOneQueryResponse {
  fetch(input: ProfileFetchOneQueryVariables): Promise<ProfileFragment>;
  error?: Error;
  loading: boolean;
  data?: ProfileFragment;
}

export function useProfileFetchOne(): UseProfileFetchOneQueryResponse {
  const [getProfile, { loading, error, data }] = useLazyQuery<ProfileFetchOneQueryResponse, ProfileFetchOneQueryVariables>(PROFILE_FETCH_ONE_QUERY);

  const onFetchProfile = async (input: ProfileFetchOneQueryVariables) => {
    const matchingProfiles = await getProfile({ variables: input });
    return matchingProfiles.data!.profile;
  }

  return {
    fetch: onFetchProfile,
    error,
    loading,
    data: data?.profile,
  }
}