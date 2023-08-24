import gql from "graphql-tag";
import { PostFetchOneInput } from "./post-fetch-one.query";

export interface PostFavoritesVariables {
  filter: PostFetchOneInput;
}

export interface PostFavoritesQueryResponse {
  postFavoriteCount: number;
}

export const POST_FAVORITES_QUERY = gql`
  query($filter: PostFilterByOneInput!) {
    postFavoriteCount(filter: $filter)
  }
`