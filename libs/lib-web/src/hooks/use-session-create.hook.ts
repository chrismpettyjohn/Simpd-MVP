import { useMutation } from "@apollo/client";
import { LOCAL_STORAGE_SESSION_TOKEN } from "app/app.constant";
import { SESSION_CREATE_MUTATION, SessionCreateMutationResponse, SessionCreateMutationVariables } from "mutation/session-create.mutation";

export interface UseSessionCreateResponse {
  execute(): Promise<SessionCreateMutationResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionCreateMutationResponse;
}

export function useSessionCreate({ email, password }: SessionCreateMutationVariables): UseSessionCreateResponse {
  const [createSession, { loading, error, data }] = useMutation(SESSION_CREATE_MUTATION);

  const onCreateSession = async () => {
    const matchingSession = await createSession({
      variables: {
        email,
        password
      }
    })
    localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, matchingSession.data.sessionCreate);
    return matchingSession.data.sessionCreate;
  }

  return {
    execute: onCreateSession,
    error,
    loading,
    data,
  }
}