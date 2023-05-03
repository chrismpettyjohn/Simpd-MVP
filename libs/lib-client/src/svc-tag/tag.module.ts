import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_TAG_NAME} from './tag.const';
import {TagClientService} from './tag-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_TAG_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [TagClientService],
  exports: [TagClientService],
})
export class TagClientModule {}
