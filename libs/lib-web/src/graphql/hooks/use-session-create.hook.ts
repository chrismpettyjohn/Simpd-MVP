import { useMutation } from "@apollo/client";
import { LOCAL_STORAGE_SESSION_TOKEN } from "app/app.constant";
import { SESSION_CREATE_MUTATION, SessionCreateMutationResponse, SessionCreateMutationVariables } from "../mutation/session-create.mutation";

export interface UseSessionCreateResponse {
  execute({ email, password }: SessionCreateMutationVariables): Promise<SessionCreateMutationResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionCreateMutationResponse;
}

export function useSessionCreate(): UseSessionCreateResponse {
  const [createSession, { loading, error, data }] = useMutation(SESSION_CREATE_MUTATION, { fetchPolicy: 'no-cache' });

  const onCreateSession = async ({ email, password }: SessionCreateMutationVariables) => {
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