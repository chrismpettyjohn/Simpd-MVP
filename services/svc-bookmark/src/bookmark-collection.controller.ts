import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {BookmarkRepository} from './bookmark.repository';
import {bookmarkEntityToBookmarkWire} from './bookmark.wire';
import {
  BookmarkFindOneInput,
  BookmarkWire,
  SVC_BOOKMARK_COLLECTION_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class BookmarkCollectionController {
  constructor(private readonly bookmarkRepo: BookmarkRepository) {}

  @MessagePattern(SVC_BOOKMARK_COLLECTION_INTERNAL_EVENT_FIND_ONE)
  async bookmarkCollectionFindOne(
    data: BookmarkFindOneInput
  ): Promise<BookmarkWire> {
    const matchingBookmarkCollection = await this.bookmarkRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return bookmarkEntityToBookmarkWire(matchingBookmarkCollection);
  }
}
