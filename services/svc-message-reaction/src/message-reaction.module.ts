import {Module} from '@nestjs/common';
import {MessageReactionService} from './message-reaction.service';
import {MessageReactionResolver} from './message-reaction.resolver';
import {MessageReactionController} from './message-reaction.controller';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';
import {
  BookmarkClientModule,
  MediaClientModule,
  MessageReactionClientModule,
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
    MessageReactionClientModule,
    GraphQLModule.forRoot(),
  ],
  providers: [MessageReactionService, MessageReactionResolver],
  controllers: [MessageReactionController],
})
export class MessageReactionModule {}
