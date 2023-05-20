import { useLazyQuery } from "@apollo/client";
import { USER_FETCH_ONE_QUERY, UserFetchOneQueryResponse, UserFetchOneQueryVariables } from "graphql/queries/user-fetch-one.query";


export interface UseFetchUserQueryResponse {
  fetch(filter: UserFetchOneQueryVariables): Promise<UserFetchOneQueryResponse>;
  error?: Error;
  loading: boolean;
  data?: UserFetchOneQueryResponse;
}

export function useUserFetchOne(): UseFetchUserQueryResponse {
  const [getUser, { loading, error, data }] = useLazyQuery(USER_FETCH_ONE_QUERY);

  const onFetchUser = async (filter: UserFetchOneQueryVariables) => {
    const matchingUser = await getUser({ variables: filter })
    return matchingUser.data.user;
  }

  return {
    fetch: onFetchUser,
    error,
    loading,
    data,
  }
}