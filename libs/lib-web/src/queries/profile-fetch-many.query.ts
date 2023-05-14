import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "fragments/profile.fragment";

export interface ProfileFetchManyQueryVariables {
  userIDs: number[];
}

export interface ProfileFetchManyQueryResponse {
  profiles: ProfileFragment[];
}

export const PROFILE_FETCH_MANY_QUERY = gql`
  ${PROFILE_FRAGMENT}
  query($userIDs: [Float!]) {
    profiles(
      filter: {
        userIDs: $userIDs
      }
    ) {
      ...ProfileFragment
    }
  }
`