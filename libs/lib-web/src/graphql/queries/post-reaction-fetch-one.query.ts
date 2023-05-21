import gql from "graphql-tag";
import { POST_REACTION_FRAGMENT, PostReactionFragment } from "graphql/fragments/post-reaction.fragment";

export interface PostReactionFetchOneQueryVariables {
  id: number;
}

export interface PostReactionFetchOneQueryResponse {
  postReaction: PostReactionFragment;
}

export const POST_REACTION_FETCH_ONE_QUERY = gql`
  ${POST_REACTION_FRAGMENT}
  query($filter: PostReactionFilterOneInput!) {
    postReaction(
      filter: $filter
    ) {
      ...PostReactionFragment
    }
  }
`