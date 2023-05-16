import { useLazyQuery } from "@apollo/client";
import { SessionFragment } from "graphql/fragments/session.fragment";
import { SESSION_FETCH_ONE_QUERY, SessionFetchOneQueryResponse, SessionFetchOneQueryVariables } from "graphql/queries/session-fetch-one.query";

export interface UseSessionFetchOneQueryResponse {
  fetch(input: SessionFetchOneQueryVariables): Promise<SessionFragment>;
  error?: Error;
  loading: boolean;
  data?: SessionFragment;
}

export function useSessionFetchOne(): UseSessionFetchOneQueryResponse {
  const [getSession, { loading, error, data }] = useLazyQuery<SessionFetchOneQueryResponse, SessionFetchOneQueryVariables>(SESSION_FETCH_ONE_QUERY);

  const onFetchSession = async (input: SessionFetchOneQueryVariables) => {
    const matchingSession = await getSession({ variables: input })
    return matchingSession.data!.session;
  }

  return {
    fetch: onFetchSession,
    error,
    loading,
    data: data?.session,
  }
}