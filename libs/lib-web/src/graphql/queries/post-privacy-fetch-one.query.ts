import gql from "graphql-tag";
import { POST_PRIVACY_FRAGMENT, PostPrivacyFragment } from "../fragments/post-privacy.fragment";

export interface PostPrivacyFetchOneInput {
  postID: number;
}

export interface PostPrivacyFetchOneQueryVariables {
  filter: PostPrivacyFetchOneInput;
}

export interface PostPrivacyFetchOneQueryResponse {
  postPrivacy: PostPrivacyFragment;
}

export const POST_PRIVACY_FETCH_ONE_QUERY = gql`
  ${POST_PRIVACY_FRAGMENT}
  query($filter: PostPrivacyFetchOneInput!) {
    postPrivacy(
      filter: $filter
    ) {
      ...PostPrivacyFragment
    }
  }
`