import gql from "graphql-tag";
import { PrivacyPolicy } from "../fragments/privacy.fragment";
import { PostPrivacyFetchOneInput } from "../queries/post-privacy-fetch-one.query";
import { POST_PRIVACY_FRAGMENT, PostPrivacyFragment } from "../fragments/post-privacy.fragment";

export interface PostPrivacyUpdateInput {
  postID: number;
  name: string;
  description: string;
  policy: PrivacyPolicy
}

export interface PostPrivacyUpdateMutationVariables {
  input: PostPrivacyUpdateInput;
  filter: PostPrivacyFetchOneInput;
}

export interface PostPrivacyUpdateMutationResponse {
  postPrivacyUpdate: PostPrivacyFragment
}

export const POST_PRIVACY_UPDATE_MUTATION = gql`
  ${POST_PRIVACY_FRAGMENT}
  mutation($input: PostPrivacyUpdateInput!, $filter: PostPrivacyFetchOneInput!) {
    postPrivacyUpdate(
      input: $input
      filter: $filter
    ) {
      ...PostPrivacyFragment
    }
  }
`