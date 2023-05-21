import {Module} from '@nestjs/common';
import {BookmarkEntity} from './bookmark.entity';
import {BookmarkResolver} from './bookmark.resolver';
import {BookmarkController} from './bookmark.controller';
import {BookmarkRepository} from './bookmark.repository';
import {BookmarkCollectionEntity} from './bookmark-collection.entity';
import {BookmarkCollectionResolver} from './bookmark-collection.resolver';
import {BookmarkCollectionRepository} from './bookmark-collection.repository';
import {BookmarkCollectionController} from './bookmark-collection.controller';
import {
  GraphQLModule,
  DatabaseModule,
  CommonModule,
  SessionModule,
} from '@simpd/lib-api';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [BookmarkEntity, BookmarkCollectionEntity],
      synchronize: true,
    }),
  ],
  providers: [
    BookmarkRepository,
    BookmarkResolver,
    BookmarkCollectionRepository,
    BookmarkCollectionResolver,
  ],
  controllers: [BookmarkController, BookmarkCollectionController],
})
export class BookmarkModule {}
