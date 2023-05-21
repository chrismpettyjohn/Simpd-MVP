import { useMutation } from "@apollo/client";
import { ProfileFragment } from "../fragments/profile.fragment";
import { PROFILE_CREATE_MUTATION, ProfileCreateMutationResponse, ProfileCreateMutationVariables } from "../mutation/profile-create.mutation";

export interface UseProfileCreateResponse {
  execute(input: ProfileCreateMutationVariables): Promise<ProfileFragment>;
  error?: Error;
  loading: boolean;
  data?: ProfileFragment;
}

export function useProfileCreate(): UseProfileCreateResponse {
  const [createProfile, { loading, error, data }] = useMutation<ProfileCreateMutationResponse, ProfileCreateMutationVariables>(PROFILE_CREATE_MUTATION);

  const onCreateSession = async (input: ProfileCreateMutationVariables) => {
    const matchingSession = await createProfile({
      variables: input
    })
    return matchingSession.data!.profileCreate;
  }

  return {
    execute: onCreateSession,
    error,
    loading,
    data: data?.profileCreate,
  }
}