import {Module} from '@nestjs/common';
import {ProfileClientModule} from '@simpd/lib-client';
import {ProfileSubscriptionGroupEntity} from './profile-subscription-group.entity';
import {ProfileSubscriptionGroupResolver} from './profile-subscription-group.resolver';
import {ProfileSubscriptionGroupController} from './profile-subscription-group.controller';
import {ProfileSubscriptionGroupRepository} from './profile-subscription-group.repository';
import {
  GraphQLModule,
  DatabaseModule,
  CommonModule,
  SessionModule,
} from '@simpd/lib-api';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [ProfileSubscriptionGroupEntity],
      synchronize: true,
    }),
  ],
  providers: [
    ProfileSubscriptionGroupRepository,
    ProfileSubscriptionGroupResolver,
  ],
  controllers: [ProfileSubscriptionGroupController],
})
export class ProfileSubscriptionGroupModule {}
