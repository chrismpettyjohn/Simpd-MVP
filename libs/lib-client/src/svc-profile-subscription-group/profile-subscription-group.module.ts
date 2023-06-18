import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_PROFILE_SUBSCRIPTION_GROUP_NAME} from './profile-subscription-group.const';
import {ProfileSubscriptionGroupClientService} from './profile-subscription-group-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PROFILE_SUBSCRIPTION_GROUP_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [ProfileSubscriptionGroupClientService],
  exports: [ProfileSubscriptionGroupClientService],
})
export class ProfileSubscriptionGroupClientModule {}
