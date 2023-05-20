import gql from "graphql-tag";
import { POST_REACTION_FRAGMENT, PostReactionFragment } from "graphql/fragments/post-reaction.fragment";

export interface PostReactionFetchManyQueryVariables {
  ids?: number[];
  postIDs?: number[];
  profileIDs?: number[];
}

export interface PostReactionFetchManyQueryResponse {
  postReaction: PostReactionFragment;
}

export const POST_REACTION_FETCH_ONE_QUERY = gql`
  ${POST_REACTION_FRAGMENT}
  query($filter: PostReactionFetchManyInput!) {
    postReactions(
      filter: $filter
    ) {
      ...PostReactionFragment
    }
  }
`