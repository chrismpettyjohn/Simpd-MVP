import gql from "graphql-tag";
import { BASE_POST_FRAGMENT, BasePostFragment } from "graphql/fragments/post.fragment";

export interface PostFetchManyQueryVariables {
  ids?: number[];
  profileIDs?: number[];
}

export interface PostFetchManyQueryResponse {
  posts: BasePostFragment[];
}

export const POST_FETCH_MANY_QUERY = gql`
  ${BASE_POST_FRAGMENT}
  query($profileIDs: [Float!]) {
    posts(
      filter: {
        profileIDs: $profileIDs
      }
    ) {
      ...BasePostFragment
    }
  }
`