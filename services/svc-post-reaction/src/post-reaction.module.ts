import {Module} from '@nestjs/common';
import {PostReactionService} from './post-reaction.service';
import {PostReactionResolver} from './post-reaction.resolver';
import {
  BookmarkClientModule,
  MediaClientModule,
  PrivacyClientModule,
  ProfileClientModule,
  ReactionClientModule,
} from '@simpd/lib-client';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';

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
  controllers: [],
})
export class PostReactionModule {}
