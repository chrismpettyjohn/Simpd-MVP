import { useLazyQuery } from "@apollo/client";
import { SESSION_AUTHENTICATED_QUERY, SessionAuthenticatedQueryResponse } from "queries/session-authenticated.query";


export interface UseSessionAuthenticatedResponse {
  fetch(): void;
  error?: Error;
  loading: boolean;
  data?: SessionAuthenticatedQueryResponse;
}

export function useSessionAuthenticated(): UseSessionAuthenticatedResponse {
  const [getSession, { loading, error, data }] = useLazyQuery(SESSION_AUTHENTICATED_QUERY);

  const onFetchSession = () => {
    getSession()
  }

  return {
    fetch: onFetchSession,
    error,
    loading,
    data,
  }
}