import { useMutation } from "@apollo/client";
import { ProfileFragment } from "../fragments/profile.fragment";
import { PROFILE_CREATE_RANDOMIZED_MUTATION, ProfileCreateRandomizedMutationResponse } from "../mutation/profile-create-randomized.mutation";

export interface UseProfileCreateRandomizedResponse {
  execute(): Promise<ProfileFragment>;
  error?: Error;
  loading: boolean;
  data?: ProfileFragment;
}

export function useProfileCreateRandomized(): UseProfileCreateRandomizedResponse {
  const [createProfileRandomized, { loading, error, data }] = useMutation<ProfileCreateRandomizedMutationResponse>(PROFILE_CREATE_RANDOMIZED_MUTATION);

  const onCreateProfileRandomized = async () => {
    const matchingSession = await createProfileRandomized()
    return matchingSession.data!.profileCreateRandomized;
  }

  return {
    execute: onCreateProfileRandomized,
    error,
    loading,
    data: data?.profileCreateRandomized,
  }
}