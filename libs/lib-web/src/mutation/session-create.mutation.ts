import gql from "graphql-tag";

export interface SessionCreateMutationVariables {
  email: string;
  password: string;
}

export type SessionCreateMutationResponse = string;

export const SESSION_CREATE_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    sessionCreate(
      input: {
        email: $email
        password: $password
      }
    )
  }
`