import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_COMMENT_REACTION_NAME} from './comment-reaction.const';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {CommentReactionClientService} from './comment-reaction-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_COMMENT_REACTION_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [CommentReactionClientService],
  exports: [CommentReactionClientService],
})
export class CommentReactionClientModule {}
