import gql from "graphql-tag";
import { TAG_FRAGMENT, TagFragment } from "../../graphql/fragments/tag.fragment";

export interface TagFetchManyInput {
  ids?: number[];
  names?: string[];
}

export interface TagFetchManyQueryVariables {
  filter: TagFetchManyInput;
}

export interface TagFetchManyQueryResponse {
  tags: TagFragment[];
}

export const TAG_FETCH_MANY_QUERY = gql`
  ${TAG_FRAGMENT}
  query($filter: TagFilterByManyInput!) {
    tags(
      filter: $filter
    ) {
      ...TagFragment
    }
  }
`