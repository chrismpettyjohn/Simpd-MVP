import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_POST_NAME} from './media.const';
import {PostClientService} from './media-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_POST_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [PostClientService],
  exports: [PostClientService],
})
export class PostClientModule {}
