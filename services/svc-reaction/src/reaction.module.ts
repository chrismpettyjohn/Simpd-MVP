import {Module} from '@nestjs/common';
import {ReactionEntity} from './reaction.entity';
import {ReactionResolver} from './reaction.resolver';
import {ReactionController} from './reaction.controller';
import {ReactionRepository} from './reaction.repository';
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
      entities: [ReactionEntity],
      synchronize: true,
    }),
  ],
  providers: [ReactionRepository, ReactionResolver],
  controllers: [ReactionController],
})
export class ReactionModule {}
