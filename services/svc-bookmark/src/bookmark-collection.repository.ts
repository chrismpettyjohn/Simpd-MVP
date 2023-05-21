import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';
import {BookmarkCollectionEntity} from './bookmark-collection.entity';

@Injectable()
export class BookmarkCollectionRepository extends BaseRepository<BookmarkCollectionEntity> {
  constructor(
    @InjectRepository(BookmarkCollectionEntity)
    bookmarkCollectionRepo: Repository<BookmarkCollectionEntity>
  ) {
    super(bookmarkCollectionRepo);
  }
}
