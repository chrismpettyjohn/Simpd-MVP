import {Module} from '@nestjs/common';
import {CommentReactionService} from './comment-reaction.service';
import {CommentReactionResolver} from './comment-reaction.resolver';
import {CommentReactionController} from './comment-reaction.controller';
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
  providers: [CommentReactionService, CommentReactionResolver],
  controllers: [CommentReactionController],
})
export class CommentReactionModule {}
