import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "../fragments/profile.fragment";

export enum ProfileSortBy {
  NEWEST_PROFILE = 'NEWEST_PROFILE'
}

export interface ProfileFetchManyInput {
  userIDs?: number[];
  sortBy?: ProfileSortBy[];
  limit?: number;
}

export interface ProfileFetchManyQueryVariables {
  filter: ProfileFetchManyInput;
}

export interface ProfileFetchManyQueryResponse {
  profiles: ProfileFragment[];
}

export const PROFILE_FETCH_MANY_QUERY = gql`
  ${PROFILE_FRAGMENT}
  query($filter: ProfileFilterByManyInput!) {
    profiles(
      filter: $filter
    ) {
      ...ProfileFragment
    }
  }
`