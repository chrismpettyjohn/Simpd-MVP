import { PostFragment } from "@simpd/lib-web";

export interface PostCardProps<P extends any = PostFragment> {
  post: P;
  hideAuthor?: boolean;
  hideTools?: boolean;
}