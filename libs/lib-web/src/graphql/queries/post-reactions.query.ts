import gql from "graphql-tag";
import { PostFetchOneInput } from "./post-fetch-one.query";

export interface PostReactionsVariables {
  filter: PostFetchOneInput;
}

export interface PostReactionsQueryResponse {
  postReactions: number;
}

export const POST_REACTIONS_QUERY = gql`
  query($filter: PostFilterByOneInput!) {
    postReactionCount(filter: $filter)
  }
`