import gql from "graphql-tag";
import { TAG_FRAGMENT, TagFragment } from "graphql/fragments/tag.fragment";

export interface TagFetchOneInput {
  id?: number;
  name?: string;
}

export interface TagFetchOneQueryVariables {
  filter: TagFetchOneInput;
}

export interface TagFetchOneQueryResponse {
  tag: TagFragment;
}

export const TAG_FETCH_ONE_QUERY = gql`
  ${TAG_FRAGMENT}
  query($filter: TagFilterByOneInput!) {
    tag(
      filter: $filter
    ) {
      ...TagFragment
    }
  }
`