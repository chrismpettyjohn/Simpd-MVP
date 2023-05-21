import { BookmarkCollectionFragment } from "@simpd/lib-web";

export interface BookmarksNavigationProps {
  bookmarkCollections: BookmarkCollectionFragment[];
  onCreation(bookmarkCollection: BookmarkCollectionFragment): void;
}