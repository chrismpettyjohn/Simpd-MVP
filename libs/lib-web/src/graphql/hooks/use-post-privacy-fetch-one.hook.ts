import { useLazyQuery } from "@apollo/client";
import { PostPrivacyFragment } from "../fragments/post-privacy.fragment";
import { POST_REACTION_FETCH_ONE_QUERY } from "../queries/post-reaction-fetch-one.query";
import { PostPrivacyFetchOneQueryResponse, PostPrivacyFetchOneQueryVariables } from "../queries/post-privacy-fetch-one.query";

export interface UsePostPrivacyFetchOneQueryResponse {
  fetch(filter: PostPrivacyFetchOneQueryVariables): Promise<PostPrivacyFragment>;
  error?: Error;
  loading: boolean;
  data?: PostPrivacyFragment;
}

export function usePostPrivacyFetchOne(): UsePostPrivacyFetchOneQueryResponse {
  const [getPostPrivacy, { loading, error, data }] = useLazyQuery<PostPrivacyFetchOneQueryResponse, PostPrivacyFetchOneQueryVariables>(POST_REACTION_FETCH_ONE_QUERY);

  const onFetchPostPrivacy = async (filter: PostPrivacyFetchOneQueryVariables) => {
    const matchingPostPrivacys = await getPostPrivacy({ variables: filter })
    return matchingPostPrivacys.data!.postPrivacy;
  }

  return {
    fetch: onFetchPostPrivacy,
    error,
    loading,
    data: data?.postPrivacy,
  }
}