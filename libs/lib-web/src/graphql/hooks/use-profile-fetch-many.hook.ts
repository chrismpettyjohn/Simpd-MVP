import { useLazyQuery } from "@apollo/client";
import { SessionFragment } from "fragments/session.fragment";
import { PROFILE_FETCH_MANY_QUERY, ProfileFetchManyQueryResponse, ProfileFetchManyQueryVariables } from "queries/profile-fetch-many.query";


export interface UseProfileFetchManyQueryResponse {
  fetch(): Promise<SessionFragment[]>;
  error?: Error;
  loading: boolean;
  data?: SessionFragment[];
}

export function useProfileFetchMany({ userIDs }: ProfileFetchManyQueryVariables): UseProfileFetchManyQueryResponse {
  const [getProfiles, { loading, error, data }] = useLazyQuery<ProfileFetchManyQueryResponse, ProfileFetchManyQueryVariables>(PROFILE_FETCH_MANY_QUERY);

  const onFetchProfiles = async () => {
    const matchingProfiles = await getProfiles({ variables: { userIDs: userIDs.map(Number) } })
    return matchingProfiles.data!.profiles;
  }

  return {
    fetch: onFetchProfiles,
    error,
    loading,
    data: data?.profiles,
  }
}