import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_NAME} from './profile-subscription-group-membership.const';
import {ProfileSubscriptionGroupMembershipClientService} from './profile-subscription-group-membership-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [ProfileSubscriptionGroupMembershipClientService],
  exports: [ProfileSubscriptionGroupMembershipClientService],
})
export class ProfileSubscriptionGroupMembershipClientModule {}
