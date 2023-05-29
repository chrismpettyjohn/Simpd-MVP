import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_MESSAGE_REACTION_NAME} from './message-reaction.const';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {MessageReactionClientService} from './message-reaction-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_MESSAGE_REACTION_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [MessageReactionClientService],
  exports: [MessageReactionClientService],
})
export class MessageReactionClientModule {}
