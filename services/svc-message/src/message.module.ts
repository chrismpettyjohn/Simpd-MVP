import {Module} from '@nestjs/common';
import {MessageEntity} from './message.entity';
import {MessageService} from './message.service';
import {MessageResolver} from './message.resolver';
import {MessageClientModule} from '@simpd/lib-client';
import {MessageController} from './message.controller';
import {MessageRepository} from './message.repository';
import {MessageContactResolver} from './message-contact.resolver';
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
    MessageClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [MessageEntity],
      synchronize: true,
    }),
  ],
  providers: [
    MessageRepository,
    MessageResolver,
    MessageContactResolver,
    MessageService,
  ],
  controllers: [MessageController],
})
export class MessageModule {}
