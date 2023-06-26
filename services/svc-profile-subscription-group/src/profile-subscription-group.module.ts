import {Module} from '@nestjs/common';
import {ProfileSubscriptionGroupService} from './profile-subscription-group.service';
import {ProfileSubscriptionGroupResolver} from './profile-subscription-group.resolver';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';
import {ProfileSubscriptionGroupController} from './profile-subscription-group.controller';
import {
  ProfileClientModule,
  SubscriptionGroupClientModule,
} from '@simpd/lib-client';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
    SubscriptionGroupClientModule,
    GraphQLModule.forRoot(),
  ],
  providers: [
    ProfileSubscriptionGroupService,
    ProfileSubscriptionGroupResolver,
  ],
  controllers: [ProfileSubscriptionGroupController],
})
export class ProfileSubscriptionGroupModule {}
