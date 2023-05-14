import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "fragments/profile.fragment";

export interface ProfileFetchOneQueryVariables {
  id?: number;
  username?: number;
}

export interface ProfileFetchOneQueryResponse {
  profile: ProfileFragment;
}

export const PROFILE_FETCH_ONE_QUERY = gql`
  ${PROFILE_FRAGMENT}
  query($profileID: Float, $username: String) {
    profile(
      filter: {
        id: $profileID
        username: $username
      }
    ) {
      ...ProfileFragment
    }
  }
`