import {Module} from '@nestjs/common';
import {SubscriptionGroupEntity} from './subscription-group.entity';
import {SubscriptionGroupResolver} from './subscription-group.resolver';
import {SubscriptionGroupController} from './subscription-group.controller';
import {SubscriptionGroupRepository} from './subscription-group.repository';
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
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [SubscriptionGroupEntity],
      synchronize: true,
    }),
  ],
  providers: [SubscriptionGroupRepository, SubscriptionGroupResolver],
  controllers: [SubscriptionGroupController],
})
export class SubscriptionGroupModule {}
