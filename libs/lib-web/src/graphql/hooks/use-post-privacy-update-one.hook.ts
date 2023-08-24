import { useMutation } from "@apollo/client";
import { PostPrivacyFragment } from "../fragments/post-privacy.fragment";
import { PostPrivacyFetchOneInput } from "../queries/post-privacy-fetch-one.query";
import { PostPrivacyCreateInput } from "../mutation/post-privacy-create-one.mutation";
import { POST_PRIVACY_UPDATE_MUTATION, PostPrivacyUpdateMutationResponse, PostPrivacyUpdateMutationVariables } from "../mutation/post-privacy-update-one.mutation";

export interface UsePostPrivacyUpdateResponse {
  execute(filter: PostPrivacyFetchOneInput, input: PostPrivacyCreateInput): Promise<PostPrivacyFragment>;
  error?: Error;
  loading: boolean;
  data?: PostPrivacyFragment;
}

export function usePostPrivacyUpdate(): UsePostPrivacyUpdateResponse {
  const [createPostPrivacy, { loading, error, data }] = useMutation<PostPrivacyUpdateMutationResponse, PostPrivacyUpdateMutationVariables>(POST_PRIVACY_UPDATE_MUTATION);

  const onUpdatePostPrivacy = async (filter: PostPrivacyFetchOneInput, input: PostPrivacyCreateInput) => {
    const newPost = await createPostPrivacy({
      variables: { input, filter }
    })
    return newPost.data!.postPrivacyUpdate;
  }

  return {
    execute: onUpdatePostPrivacy,
    error,
    loading,
    data: data?.postPrivacyUpdate,
  }
}