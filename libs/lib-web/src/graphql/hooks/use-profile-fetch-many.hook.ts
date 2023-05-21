import { useLazyQuery } from "@apollo/client";
import { ProfileFragment } from "../fragments/profile.fragment";
import { PROFILE_FETCH_MANY_QUERY, ProfileFetchManyInput, ProfileFetchManyQueryResponse, ProfileFetchManyQueryVariables } from "../queries/profile-fetch-many.query";


export interface UseProfileFetchManyQueryResponse {
  fetch(filter: ProfileFetchManyInput): Promise<ProfileFragment[]>;
  error?: Error;
  loading: boolean;
  data?: ProfileFragment[];
}

export function useProfileFetchMany(): UseProfileFetchManyQueryResponse {
  const [getProfiles, { loading, error, data }] = useLazyQuery<ProfileFetchManyQueryResponse, ProfileFetchManyQueryVariables>(PROFILE_FETCH_MANY_QUERY);

  const onFetchProfiles = async (filter: ProfileFetchManyInput) => {
    const matchingProfiles = await getProfiles({ variables: { filter } })
    return matchingProfiles.data!.profiles;
  }

  return {
    fetch: onFetchProfiles,
    error,
    loading,
    data: data?.profiles,
  }
}