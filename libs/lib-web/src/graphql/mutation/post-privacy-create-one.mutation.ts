import gql from "graphql-tag";
import { PrivacyPolicy } from "../fragments/privacy.fragment";
import { POST_PRIVACY_FRAGMENT, PostPrivacyFragment } from "../fragments/post-privacy.fragment";

export interface PostPrivacyCreateInput {
  postID: number;
  policy: PrivacyPolicy
}

export interface PostPrivacyCreateMutationVariables {
  input: PostPrivacyCreateInput;
}

export interface PostPrivacyCreateMutationResponse {
  postPrivacyCreate: PostPrivacyFragment
}

export const POST_PRIVACY_CREATE_MUTATION = gql`
  ${POST_PRIVACY_FRAGMENT}
  mutation($input: PostPrivacyCreateInput!) {
    postPrivacyCreate(
      input: $input
    ) {
      ...PostPrivacyFragment
    }
  }
`