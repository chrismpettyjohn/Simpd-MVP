import gql from "graphql-tag";
import { PostFetchOneInput } from "./post-fetch-one.query";

export interface PostSharesVariables {
  filter: PostFetchOneInput;
}

export interface PostSharesQueryResponse {
  postShareCount: number;
}

export const POST_SHARES_QUERY = gql`
  query($filter: PostFilterByOneInput!) {
    postShareCount(filter: $filter)
  }
`