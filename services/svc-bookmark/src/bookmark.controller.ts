import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {BookmarkRepository} from './bookmark.repository';
import {bookmarkEntityToBookmarkWire} from './bookmark.wire';
import {
  BookmarkFindOneInput,
  BookmarkWire,
  SVC_BOOKMARK_INTERNAL_EVENT_FIND_MANY,
  SVC_BOOKMARK_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';
import {BookmarkFindManyInput} from './bookmark.input';
import {In} from 'typeorm';

@Controller()
export class BookmarkController {
  constructor(private readonly bookmarkRepo: BookmarkRepository) {}

  @MessagePattern(SVC_BOOKMARK_INTERNAL_EVENT_FIND_ONE)
  async bookmarkFindOne(data: BookmarkFindOneInput): Promise<BookmarkWire> {
    const matchingBookmark = await this.bookmarkRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return bookmarkEntityToBookmarkWire(matchingBookmark);
  }

  @MessagePattern(SVC_BOOKMARK_INTERNAL_EVENT_FIND_MANY)
  async bookmarkFindMany(
    filter: BookmarkFindManyInput
  ): Promise<BookmarkWire[]> {
    const matchingBookmarks = await this.bookmarkRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        profileID: filter.profileIDs && In(filter.profileIDs),
        resourceID: filter.resourceIDs && In(filter.resourceIDs),
        bookmarkCollectionID:
          filter.bookmarkCollectionIDs && In(filter.bookmarkCollectionIDs),
      },
    });
    return matchingBookmarks.map(bookmarkEntityToBookmarkWire);
  }
}
