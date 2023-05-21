import {Module} from '@nestjs/common';
import {BookmarkEntity} from './bookmark.entity';
import {BookmarkResolver} from './bookmark.resolver';
import {BookmarkController} from './bookmark.controller';
import {BookmarkRepository} from './bookmark.repository';
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
      entities: [BookmarkEntity],
      synchronize: true,
    }),
  ],
  providers: [BookmarkRepository, BookmarkResolver],
  controllers: [BookmarkController],
})
export class BookmarkModule {}
