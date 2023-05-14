import { useLazyQuery } from "@apollo/client";
import { SessionFragment } from "graphql/fragments/session.fragment";
import { PROFILE_FETCH_ONE_QUERY, ProfileFetchOneQueryResponse, ProfileFetchOneQueryVariables } from "graphql/queries/profile-fetch-one.query";
import { useEffect } from "react";

export interface UseProfileFetchOneQueryResponse {
  fetch(): Promise<SessionFragment>;
  error?: Error;
  loading: boolean;
  data?: SessionFragment;
}

export function useProfileFetchOne({ id, username }: ProfileFetchOneQueryVariables): UseProfileFetchOneQueryResponse {
  const [getProfile, { loading, error, data }] = useLazyQuery<ProfileFetchOneQueryResponse, ProfileFetchOneQueryVariables>(PROFILE_FETCH_ONE_QUERY);

  const onFetchProfile = async () => {
    const matchingProfiles = await getProfile({ variables: { id, username } })
    return matchingProfiles.data!.profile;
  }

  return {
    fetch: onFetchProfile,
    error,
    loading,
    data: data?.profile,
  }
}