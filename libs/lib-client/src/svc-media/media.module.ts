import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_MEDIA_NAME} from './media.const';
import {MediaClientService} from './media-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_MEDIA_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [MediaClientService],
  exports: [MediaClientService],
})
export class MediaClientModule {}
