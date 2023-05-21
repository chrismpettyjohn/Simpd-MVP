import {BookmarkWire} from '@simpd/lib-client';
import {BookmarkEntity} from './bookmark.entity';

export function bookmarkEntityToBookmarkWire(
  bookmarkEntity: BookmarkEntity
): BookmarkWire {
  return {
    id: bookmarkEntity.id!,
  };
}
