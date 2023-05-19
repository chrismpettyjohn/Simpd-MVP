import { PostFragment } from "@simpd/lib-web";

export interface CreateNewPostCardProps {
  onCreate(newPost: PostFragment): void;
}