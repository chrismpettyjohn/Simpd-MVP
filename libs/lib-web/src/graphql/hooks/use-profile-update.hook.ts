import { useMutation } from "@apollo/client";
import { ProfileFragment } from "graphql/fragments/profile.fragment";
import { PROFILE_UPDATE_MUTATION, ProfileUpdateMutationVariables } from "graphql/mutation/profile-update.mutation";

export interface UseProfileUpdateResponse {
  execute(variables: ProfileUpdateMutationVariables): Promise<ProfileFragment>;
  error?: Error;
  loading: boolean;
  data?: ProfileFragment;
}

export function useProfileUpdate(): UseProfileUpdateResponse {
  const [updateProfile, { loading, error, data }] = useMutation(PROFILE_UPDATE_MUTATION);

  const onSaveProfileChanges = async ({ profileID, username, changes }: ProfileUpdateMutationVariables) => {
    const profileChanges = await updateProfile({
      variables: {
        profileID,
        username,
        changes
      }
    })
    return profileChanges.data.profileUpdate;
  }

  return {
    execute: onSaveProfileChanges,
    error,
    loading,
    data,
  }
}