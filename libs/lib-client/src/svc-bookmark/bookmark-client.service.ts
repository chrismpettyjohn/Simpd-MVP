import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  BookmarkFindManyInput,
  BookmarkFindOneInput,
  BookmarkWire,
} from './bookmark-client.types';
import {
  SVC_BOOKMARK_INTERNAL_EVENT_FIND_MANY,
  SVC_BOOKMARK_INTERNAL_EVENT_FIND_ONE,
  SVC_BOOKMARK_NAME,
} from './bookmark.const';

@Injectable()
export class BookmarkClientService {
  constructor(@Inject(SVC_BOOKMARK_NAME) private client: ClientProxy) {}

  async findOne(input: BookmarkFindOneInput): Promise<BookmarkWire> {
    const matchingBookmark$ = this.client.send(
      SVC_BOOKMARK_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingBookmark$);
  }

  async findMany(input: BookmarkFindManyInput): Promise<BookmarkWire[]> {
    const matchingBookmarks$ = this.client.send(
      SVC_BOOKMARK_INTERNAL_EVENT_FIND_MANY,
      input
    );
    return await lastValueFrom(matchingBookmarks$);
  }
}
