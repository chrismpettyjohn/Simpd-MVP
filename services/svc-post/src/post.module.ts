import {Module} from '@nestjs/common';
import {PostEntity} from './post.entity';
import {PostService} from './post.service';
import {PostResolver} from './post.resolver';
import {PostController} from './post.controller';
import {PostRepository} from './post.repository';
import {PostPrivacyService} from './post-privacy.service';
import {
  BookmarkClientModule,
  MediaClientModule,
  PostReactionClientModule,
  PrivacyClientModule,
  ProfileClientModule,
  ProfileSubscriptionGroupMembershipClientModule,
  ReactionClientModule,
  SubscriptionGroupClientModule,
  TagClientModule,
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
    TagClientModule,
    ProfileClientModule,
    PrivacyClientModule,
    MediaClientModule,
    ReactionClientModule,
    BookmarkClientModule,
    PostReactionClientModule,
    SubscriptionGroupClientModule,
    ProfileSubscriptionGroupMembershipClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [PostEntity],
      synchronize: true,
    }),
  ],
  providers: [PostRepository, PostResolver, PostPrivacyService, PostService],
  controllers: [PostController],
})
export class PostModule {}
