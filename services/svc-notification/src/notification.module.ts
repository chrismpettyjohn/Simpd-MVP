import {Module} from '@nestjs/common';
import {NotificationEntity} from './notification.entity';
import {NotificationResolver} from './notification.resolver';
import {NotificationController} from './notification.controller';
import {NotificationRepository} from './notification.repository';
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
      entities: [NotificationEntity],
      synchronize: true,
    }),
  ],
  providers: [NotificationRepository, NotificationResolver],
  controllers: [NotificationController],
})
export class NotificationModule {}
