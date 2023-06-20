import gql from "graphql-tag";
import { PostPrivacyCreateInput } from "./post-privacy-create-one.mutation";
import { PostPrivacyFetchOneInput } from "../queries/post-privacy-fetch-one.query";
import { POST_PRIVACY_FRAGMENT, PostPrivacyFragment } from "../fragments/post-privacy.fragment";


export interface PostPrivacyUpdateMutationVariables {
  input: Partial<PostPrivacyCreateInput>;
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