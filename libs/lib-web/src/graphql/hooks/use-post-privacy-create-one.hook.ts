import { useMutation } from "@apollo/client";
import { PostPrivacyFragment } from "../fragments/post-privacy.fragment";
import { POST_PRIVACY_CREATE_MUTATION, PostPrivacyCreateInput, PostPrivacyCreateMutationResponse, PostPrivacyCreateMutationVariables } from "../mutation/post-privacy-create-one.mutation";

export interface UsePostPrivacyCreateResponse {
  execute(input: PostPrivacyCreateInput): Promise<PostPrivacyFragment>;
  error?: Error;
  loading: boolean;
  data?: PostPrivacyFragment;
}

export function usePostPrivacyCreate(): UsePostPrivacyCreateResponse {
  const [createPostPrivacy, { loading, error, data }] = useMutation<PostPrivacyCreateMutationResponse, PostPrivacyCreateMutationVariables>(POST_PRIVACY_CREATE_MUTATION);

  const onCreatePostPrivacy = async (input: PostPrivacyCreateInput) => {
    const newPost = await createPostPrivacy({
      variables: { input }
    })
    return newPost.data!.postPrivacyCreate;
  }

  return {
    execute: onCreatePostPrivacy,
    error,
    loading,
    data: data?.postPrivacyCreate,
  }
}