import {Module} from '@nestjs/common';
import {ChatReactionService} from './chat-reaction.service';
import {ChatReactionResolver} from './chat-reaction.resolver';
import {ChatReactionController} from './chat-reaction.controller';
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
  providers: [ChatReactionService, ChatReactionResolver],
  controllers: [ChatReactionController],
})
export class ChatReactionModule {}
