import {Module} from '@nestjs/common';
import {ProfileSubscriptionGroupService} from './profile-subscription-group.service';
import {ProfileSubscriptionGroupResolver} from './profile-subscription-group.resolver';
import {ProfileSubscriptionGroupController} from './profile-subscription-group.controller';
import {
  ProfileClientModule,
  SubscriptionGroupClientModule,
} from '@simpd/lib-client';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';

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
