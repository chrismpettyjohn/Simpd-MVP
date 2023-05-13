import gql from "graphql-tag";
import { SESSION_FRAGMENT, SessionFragment } from "fragments/session.fragment";

export interface SessionCreateMutationVariables {
  email: string;
  password: string;
}

export type SessionCreateMutationResponse = SessionFragment;

export const SESSION_CREATE_MUTATION = gql`
  ${SESSION_FRAGMENT}
  mutation($email: String!, $password: String!) {
    sessionCreate(
      input: {
        email: $email
        password: $password
      }
    ) {
      ...SessionFragment
    }
  }
`