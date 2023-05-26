import {Module} from '@nestjs/common';
import {PostReactionService} from './post-reaction.service';
import {PostReactionResolver} from './post-reaction.resolver';
import {PostReactionController} from './post-reaction.controller';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';
import {
  BookmarkClientModule,
  MediaClientModule,
  PrivacyClientModule,
  ProfileClientModule,
  ReactionClientModule,
} from '@simpd/lib-client';

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
  ],
  providers: [PostReactionService, PostReactionResolver],
  controllers: [PostReactionController],
})
export class PostReactionModule {}
