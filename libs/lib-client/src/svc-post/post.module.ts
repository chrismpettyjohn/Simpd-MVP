import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_PROFILE_NAME} from './post.const';
import {PostClientService} from './post-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PROFILE_NAME,
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
