import { Module } from '@nestjs/common';
import {
  GraphQLModule,
  CommonModule,
  SessionModule,
  DatabaseModule,
} from '@simpd/lib-api';
import { ProfileSubscriptionGroupMembershipResolver } from './profile-subscription-group-membership.resolver';
import { ProfileSubscriptionGroupMembershipRepository } from './profile-subscription-group-membership.repository';
import { ProfileSubscriptionGroupMembershipController } from './profile-subscription-group-membership.controller';
import { ProfileSubscriptionGroupMembershipMembershipEntity } from './profile-subscription-group-membership.entity';
import {
  ProfileClientModule,
  ProfileSubscriptionGroupMembershipClientModule,
  SubscriptionGroupClientModule,
} from '@simpd/lib-client';
import { ProfileSubscriptionGroupMembershipService } from './profile-subscription-group-membership.service';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
    SubscriptionGroupClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [ProfileSubscriptionGroupMembershipMembershipEntity],
      synchronize: true,
    }),
    ProfileSubscriptionGroupMembershipClientModule,
  ],
  providers: [
    ProfileSubscriptionGroupMembershipResolver,
    ProfileSubscriptionGroupMembershipRepository,
    ProfileSubscriptionGroupMembershipService,
  ],
  controllers: [ProfileSubscriptionGroupMembershipController],
})
export class ProfileSubscriptionGroupMembershipModule { }
