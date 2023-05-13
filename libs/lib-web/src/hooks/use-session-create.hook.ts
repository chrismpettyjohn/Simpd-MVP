import { useMutation } from "@apollo/client";
import { SESSION_CREATE_MUTATION, SessionCreateMutationResponse, SessionCreateMutationVariables } from "mutation/session-create.mutation";

export interface UseSessionCreateResponse {
  run(): Promise<SessionCreateMutationResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionCreateMutationResponse;
}

export function useSessionCreate({ userID, password }: SessionCreateMutationVariables): UseSessionCreateResponse {
  const [createSession, { loading, error, data }] = useMutation(SESSION_CREATE_MUTATION);

  const onCreateSession = async () => {
    const matchingSession = await createSession({
      variables: {
        userID,
        password
      }
    })
    return matchingSession.data;
  }

  return {
    run: onCreateSession,
    error,
    loading,
    data,
  }
}