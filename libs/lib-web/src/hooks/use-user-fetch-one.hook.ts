import { useLazyQuery } from "@apollo/client";
import { USER_FETCH_ONE_QUERY, UserFetchOneQueryResponse, UserFetchOneQueryVariables } from "queries/user-fetch-one.query";


export interface UseFetchUserQueryResponse {
  fetch(): Promise<UserFetchOneQueryResponse>;
  error?: Error;
  loading: boolean;
  data?: UserFetchOneQueryResponse;
}

export function useUserFetchOne({ userID }: UserFetchOneQueryVariables): UseFetchUserQueryResponse {
  const [getUser, { loading, error, data }] = useLazyQuery(USER_FETCH_ONE_QUERY);

  const onFetchUser = async () => {
    const matchingUser = await getUser({ variables: { userID } })
    return matchingUser.data;
  }

  return {
    fetch: onFetchUser,
    error,
    loading,
    data,
  }
}