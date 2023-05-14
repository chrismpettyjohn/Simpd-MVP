import { useMutation } from "@apollo/client";
import { USER_CHANGE_PASSWORD_MUTATION, UserChangePasswordMutationVariables } from "mutation/user-change-password.mutation";

export interface UseUserChangePasswordResponse {
  execute({ userID, input }: UserChangePasswordMutationVariables): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function useUserChangePassword(): UseUserChangePasswordResponse {
  const [changePassword, { loading, error }] = useMutation(USER_CHANGE_PASSWORD_MUTATION);

  const onChangePassword = async ({ userID, input }: UserChangePasswordMutationVariables) => {
    await changePassword({
      variables: {
        userID,
        input,
      }
    })
  }

  return {
    execute: onChangePassword,
    error,
    loading,
  }
}