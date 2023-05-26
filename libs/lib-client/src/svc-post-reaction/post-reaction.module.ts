import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_POST_REACTION_NAME} from './post-reaction.const';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {PostReactionClientService} from './post-reaction-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_POST_REACTION_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [PostReactionClientService],
  exports: [PostReactionClientService],
})
export class PostReactionClientModule {}
