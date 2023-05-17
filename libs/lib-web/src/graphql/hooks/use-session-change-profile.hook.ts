import { useMutation } from "@apollo/client";
import { LOCAL_STORAGE_SESSION_TOKEN } from "app/app.constant";
import { SESSION_CHANGE_PROFILE_MUTATION, SessionChangeProfileMutationResponse, SessionChangeProfileMutationVariables } from "../mutation/session-change-profile.mutation";

export interface UseSessionChangeProfileResponse {
  execute({ profileID }: SessionChangeProfileMutationVariables): Promise<SessionChangeProfileMutationResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionChangeProfileMutationResponse;
}

export function useSessionChangeProfile(): UseSessionChangeProfileResponse {
  const [sessionChangeProfile, { loading, error, data }] = useMutation(SESSION_CHANGE_PROFILE_MUTATION, { fetchPolicy: 'no-cache' });

  const onSessionChangeProfile = async (input: SessionChangeProfileMutationVariables) => {
    const matchingSession = await sessionChangeProfile({
      variables: input
    })
    localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, matchingSession.data.sessionChangeProfile);
    return matchingSession.data.sessionChangeProfile;
  }

  return {
    execute: onSessionChangeProfile,
    error,
    loading,
    data,
  }
}