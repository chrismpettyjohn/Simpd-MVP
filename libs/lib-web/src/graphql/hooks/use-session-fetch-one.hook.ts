import { useLazyQuery } from "@apollo/client";
import { SessionFragment } from "../fragments/session.fragment";
import { SESSION_FETCH_ONE_QUERY, SessionFetchOneInput, SessionFetchOneQueryResponse, SessionFetchOneQueryVariables } from "../queries/session-fetch-one.query";

export interface UseSessionFetchOneQueryResponse {
  fetch(filter: SessionFetchOneInput): Promise<SessionFragment>;
  error?: Error;
  loading: boolean;
  data?: SessionFragment;
}

export function useSessionFetchOne(): UseSessionFetchOneQueryResponse {
  const [getSession, { loading, error, data }] = useLazyQuery<SessionFetchOneQueryResponse, SessionFetchOneQueryVariables>(SESSION_FETCH_ONE_QUERY, { fetchPolicy: 'no-cache' });

  const onFetchSession = async (filter: SessionFetchOneInput) => {
    const matchingSession = await getSession({ variables: { filter } })
    return matchingSession.data!.session;
  }

  return {
    fetch: onFetchSession,
    error,
    loading,
    data: data?.session,
  }
}