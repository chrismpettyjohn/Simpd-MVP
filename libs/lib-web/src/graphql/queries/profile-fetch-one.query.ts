import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "../fragments/profile.fragment";

export interface ProfileFetchOneInput {
  id?: number;
  username?: string;
}

export interface ProfileFetchOneQueryVariables {
  filter: ProfileFetchOneInput;
}

export interface ProfileFetchOneQueryResponse {
  profile: ProfileFragment;
}

export const PROFILE_FETCH_ONE_QUERY = gql`
  ${PROFILE_FRAGMENT}
  query($filter: ProfileFilterByOneInput!) {
    profile(
      filter: $filter
    ) {
      ...ProfileFragment
    }
  }
`