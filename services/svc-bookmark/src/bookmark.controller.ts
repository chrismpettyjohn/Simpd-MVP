import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {BookmarkRepository} from './bookmark.repository';
import {bookmarkEntityToBookmarkWire} from './bookmark.wire';
import {
  BookmarkFindOneInput,
  BookmarkWire,
  SVC_FORM_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class BookmarkController {
  constructor(private readonly bookmarkRepo: BookmarkRepository) {}

  @MessagePattern(SVC_FORM_INTERNAL_EVENT_FIND_ONE)
  async bookmarkFindOneByID(data: BookmarkFindOneInput): Promise<BookmarkWire> {
    const matchingRole = await this.bookmarkRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return bookmarkEntityToBookmarkWire(matchingRole);
  }
}
