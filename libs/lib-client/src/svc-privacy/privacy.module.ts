import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_PRIVACY_NAME} from './privacy.const';
import {PrivacyClientService} from './privacy-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PRIVACY_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [PrivacyClientService],
  exports: [PrivacyClientService],
})
export class PrivacyClientModule {}
