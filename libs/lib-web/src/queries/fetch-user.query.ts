import gql from "graphql-tag";
import { USER_FRAGMENT, UserFragment } from "fragments/user.fragment";

export interface FetchUsersQueryVariables {
  userID: number;
}

export type FetchUsersQueryResponse = UserFragment;

export const FETCH_USER_QUERY = gql`
  ${USER_FRAGMENT}
  query($userID: Number!) {
    user(
      filters: {
        id: $userID
      }
    ) {
      ...UserFragment
    }
  }
`