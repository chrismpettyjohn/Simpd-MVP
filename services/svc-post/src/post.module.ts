import {Module} from '@nestjs/common';
import {PostEntity} from './post.entity';
import {PostResolver} from './post.resolver';
import {PostController} from './post.controller';
import {PostRepository} from './post.repository';
import {PostPrivacyService} from './post-privacy.service';
import {PostReactionService} from './post-reaction.service';
import {PostReactionResolver} from './post-reaction.resolver';
import {
  BookmarkClientModule,
  MediaClientModule,
  PrivacyClientModule,
  ProfileClientModule,
  ReactionClientModule,
} from '@simpd/lib-client';
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
    ProfileClientModule,
    PrivacyClientModule,
    MediaClientModule,
    ReactionClientModule,
    BookmarkClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [PostEntity],
      synchronize: true,
    }),
  ],
  providers: [
    PostRepository,
    PostResolver,
    PostPrivacyService,
    PostReactionService,
    PostReactionResolver,
  ],
  controllers: [PostController],
})
export class PostModule {}
