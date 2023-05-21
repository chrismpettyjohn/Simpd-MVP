import { BookmarkCollectionFragment } from "@simpd/lib-web";

export interface AddBookmarkCollectionProps {
  onCreation(newBookmarkCollection: BookmarkCollectionFragment): void;
}