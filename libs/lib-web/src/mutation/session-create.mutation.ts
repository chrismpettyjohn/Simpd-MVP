import gql from "graphql-tag";
import { SESSION_FRAGMENT, SessionFragment } from "fragments/session.fragment";

export interface SessionCreateMutationVariables {
  userID: number;
  password: string;
}

export type SessionCreateMutationResponse = SessionFragment;

export const SESSION_CREATE_MUTATION = gql`
  ${SESSION_FRAGMENT}
  mutation($userID: Number!, $password: String!) {
    sessionCreate(
      input: {
        userID: $userID
        password: $password
      }
    ) {
      ...SessionFragment
    }
  }
`