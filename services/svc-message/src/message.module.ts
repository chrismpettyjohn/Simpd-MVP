import {Module} from '@nestjs/common';
import {MessageEntity} from './message.entity';
import {MessageResolver} from './message.resolver';
import {MessageController} from './message.controller';
import {MessageRepository} from './message.repository';
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
      entities: [MessageEntity],
      synchronize: true,
    }),
  ],
  providers: [MessageRepository, MessageResolver],
  controllers: [MessageController],
})
export class MessageModule {}
