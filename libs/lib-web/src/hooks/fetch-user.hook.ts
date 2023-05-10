import { useLazyQuery } from "@apollo/client";
import { FETCH_USER_QUERY, FetchUsersQueryResponse, FetchUsersQueryVariables } from "queries/fetch-user.query";


export interface UseFetchUserQueryResponse {
  fetch(): void;
  error?: Error;
  loading: boolean;
  data?: FetchUsersQueryResponse;
}

export function useFetchUser({ userID }: FetchUsersQueryVariables): UseFetchUserQueryResponse {
  const [getUser, { loading, error, data }] = useLazyQuery(FETCH_USER_QUERY);

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