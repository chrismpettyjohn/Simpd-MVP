import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_CHAT_REACTION_NAME} from './chat-reaction.const';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {ChatReactionClientService} from './chat-reaction-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_CHAT_REACTION_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [ChatReactionClientService],
  exports: [ChatReactionClientService],
})
export class ChatReactionClientModule {}
