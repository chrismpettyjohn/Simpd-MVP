import { useLazyQuery } from "@apollo/client";
import { TagFragment } from "../fragments/tag.fragment";
import { TAG_FETCH_ONE_QUERY, TagFetchOneInput, TagFetchOneQueryResponse, TagFetchOneQueryVariables } from "../../graphql/queries/tag-fetch-one.query";

export interface UseTagFetchOneQueryResponse {
  fetch(filter: TagFetchOneInput): Promise<TagFragment>;
  error?: Error;
  loading: boolean;
  data?: TagFragment;
}

export function useTagFetchOne(): UseTagFetchOneQueryResponse {
  const [getTag, { loading, error, data }] = useLazyQuery<TagFetchOneQueryResponse, TagFetchOneQueryVariables>(TAG_FETCH_ONE_QUERY, { fetchPolicy: 'no-cache' });

  const onFetchTag = async (filter: TagFetchOneInput) => {
    const matchingTag = await getTag({ variables: { filter } })
    return matchingTag.data!.tag;
  }

  return {
    fetch: onFetchTag,
    error,
    loading,
    data: data?.tag,
  }
}