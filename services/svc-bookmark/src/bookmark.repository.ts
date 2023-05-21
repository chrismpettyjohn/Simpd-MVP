import {Repository} from 'typeorm';
import {BookmarkEntity} from './bookmark.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class BookmarkRepository extends BaseRepository<BookmarkEntity> {
  constructor(
    @InjectRepository(BookmarkEntity) userRepo: Repository<BookmarkEntity>
  ) {
    super(userRepo);
  }
}
