import { PostCommentFragment } from "@simpd/lib-web";

export interface CreatePostCommentBlockProps {
  postID: number;
  onNewComment(comment: PostCommentFragment): void;
}