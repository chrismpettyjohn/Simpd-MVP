import {BookmarkWire} from '@simpd/lib-client';
import {BookmarkEntity} from './bookmark.entity';

export function bookmarkEntityToBookmarkWire(
  bookmarkEntity: BookmarkEntity
): BookmarkWire {
  return {
    id: bookmarkEntity.id!,
    type: bookmarkEntity.type,
    profileID: bookmarkEntity.profileID,
    resourceID: bookmarkEntity.resourceID,
    bookmarkCollectionID: bookmarkEntity.bookmarkCollectionID,
  };
}
