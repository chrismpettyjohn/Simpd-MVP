import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_POST_PRIVACY_NAME} from './post-privacy.const';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_POST_PRIVACY_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
})
export class PostPrivacyClientModule {}
