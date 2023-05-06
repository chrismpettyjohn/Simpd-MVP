import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_SUBSCRIPTION_GROUP_NAME} from './subscription-group.const';
import {SubscriptionGroupClientService} from './subscription-group-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_SUBSCRIPTION_GROUP_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [SubscriptionGroupClientService],
  exports: [SubscriptionGroupClientService],
})
export class SubscriptionGroupClientModule {}
