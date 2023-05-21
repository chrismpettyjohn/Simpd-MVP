import gql from "graphql-tag";
import { POST_REACTION_FRAGMENT, PostReactionFragment } from "../fragments/post-reaction.fragment";

export interface PostReactionFilterManyInput {
  postIDs?: number[];
  profileIDs?: number[];
}

export interface PostReactionFetchManyQueryVariables {
  filter: PostReactionFilterManyInput;
}

export interface PostReactionFetchManyQueryResponse {
  postReactions: PostReactionFragment[];
}

export const POST_REACTION_FETCH_MANY_QUERY = gql`
  ${POST_REACTION_FRAGMENT}
  query($filter: PostReactionFilterManyInput!) {
    postReactions(
      filter: $filter
    ) {
      ...PostReactionFragment
    }
  }
`