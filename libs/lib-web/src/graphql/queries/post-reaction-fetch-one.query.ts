import gql from "graphql-tag";
import { POST_REACTION_FRAGMENT, PostReactionFragment } from "../fragments/post-reaction.fragment";

export interface PostReactionFilterOneInput {
  postID?: number;
  profileID?: number;
}

export interface PostReactionFetchOneQueryVariables {
  filter: PostReactionFilterOneInput;
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