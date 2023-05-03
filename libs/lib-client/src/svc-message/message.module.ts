import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_MESSAGE_NAME} from './message.const';
import {MessageClientService} from './message-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_MESSAGE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [MessageClientService],
  exports: [MessageClientService],
})
export class MessageClientModule {}
