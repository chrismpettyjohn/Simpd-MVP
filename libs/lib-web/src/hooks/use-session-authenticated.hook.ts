import { useLazyQuery } from "@apollo/client";
import { SESSION_AUTHENTICATED_QUERY, SessionAuthenticatedQueryResponse } from "queries/session-authenticated.query";


export interface UseSessionAuthenticatedResponse {
  fetch(): Promise<SessionAuthenticatedQueryResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionAuthenticatedQueryResponse;
}

export function useSessionAuthenticated(): UseSessionAuthenticatedResponse {
  const [getSession, { loading, error, data }] = useLazyQuery(SESSION_AUTHENTICATED_QUERY);

  const onFetchSession = async () => {
    const matchingSession = await getSession()
    console.log(matchingSession.data)
    return matchingSession.data.me;
  }

  return {
    fetch: onFetchSession,
    error,
    loading,
    data,
  }
}