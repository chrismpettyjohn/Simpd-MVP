import gql from "graphql-tag";
import { USER_FRAGMENT, UserFragment } from "../fragments/user.fragment";

export interface UserFetchOneQueryVariables {
  userID: number;
}

export type UserFetchOneQueryResponse = UserFragment;

export const USER_FETCH_ONE_QUERY = gql`
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