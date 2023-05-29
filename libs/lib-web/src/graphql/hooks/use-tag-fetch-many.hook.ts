import { useLazyQuery } from "@apollo/client";
import { TagFragment } from "../fragments/tag.fragment";
import { TAG_FETCH_MANY_QUERY, TagFetchManyInput, TagFetchManyQueryResponse, TagFetchManyQueryVariables } from "../queries/tag-fetch-many.query";


export interface UseTagFetchManyQueryResponse {
  fetch(filter: TagFetchManyInput): Promise<TagFragment[]>;
  error?: Error;
  loading: boolean;
  data?: TagFragment[];
}

export function useTagFetchMany(): UseTagFetchManyQueryResponse {
  const [getTags, { loading, error, data }] = useLazyQuery<TagFetchManyQueryResponse, TagFetchManyQueryVariables>(TAG_FETCH_MANY_QUERY);

  const onFetchTags = async (filter: TagFetchManyInput) => {
    const matchingTags = await getTags({ variables: { filter } })
    return matchingTags.data!.tags;
  }

  return {
    fetch: onFetchTags,
    error,
    loading,
    data: data?.tags,
  }
}