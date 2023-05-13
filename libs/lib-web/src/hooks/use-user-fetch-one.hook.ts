import { useLazyQuery } from "@apollo/client";
import { USER_FETCH_ONE_QUERY, UserFetchOneQueryResponse, UserFetchOneQueryVariables } from "queries/user-fetch-one.query";


export interface UseFetchUserQueryResponse {
  fetch(): void;
  error?: Error;
  loading: boolean;
  data?: UserFetchOneQueryResponse;
}

export function useUserFetchOne({ userID }: UserFetchOneQueryVariables): UseFetchUserQueryResponse {
  const [getUser, { loading, error, data }] = useLazyQuery(USER_FETCH_ONE_QUERY);

  const onFetchUser = () => {
    getUser({ variables: { userID } })
  }

  return {
    fetch: onFetchUser,
    error,
    loading,
    data,
  }
}