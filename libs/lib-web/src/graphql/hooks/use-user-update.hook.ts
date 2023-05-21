import { useLazyQuery } from "@apollo/client";
import { UserUpdateMutationVariables } from "../mutation/user-update.mutation";
import { USER_FETCH_ONE_QUERY, UserFetchOneQueryVariables } from "../queries/user-fetch-one.query";


export interface UseUserUpdateMutationResponse {
  execute(filter: UserFetchOneQueryVariables, input: UserUpdateMutationVariables): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useUserUpdate(): UseUserUpdateMutationResponse {
  const [getUser, { loading, error, data }] = useLazyQuery(USER_FETCH_ONE_QUERY);

  const onUpdateUser = async (filter: UserFetchOneQueryVariables, input: UserUpdateMutationVariables) => {
    const updateUser = await getUser({ variables: { filter, input } })
    return updateUser.data.user;
  }

  return {
    execute: onUpdateUser,
    error,
    loading,
    data,
  }
}