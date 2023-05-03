import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_REACTION_NAME} from './reaction.const';
import {ReactionClientService} from './reaction-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_REACTION_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [ReactionClientService],
  exports: [ReactionClientService],
})
export class ReactionClientModule {}
