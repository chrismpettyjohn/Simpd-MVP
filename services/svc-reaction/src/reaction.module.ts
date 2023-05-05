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
import {ProfileClientModule} from '@simpd/lib-client';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
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
