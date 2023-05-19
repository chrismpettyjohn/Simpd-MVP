import { PostFragment } from "@simpd/lib-web";

export interface PostCardProps<P extends PostFragment = PostFragment> {
  post: P;
  hideAuthor?: boolean;
}