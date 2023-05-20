import {Module} from '@nestjs/common';
import {ReactionEntity} from './reaction.entity';
import {ReactionController} from './reaction.controller';
import {ReactionRepository} from './reaction.repository';
import {DatabaseModule, CommonModule, SessionModule} from '@simpd/lib-api';
import {ProfileClientModule} from '@simpd/lib-client';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
    DatabaseModule.forRoot({
      entities: [ReactionEntity],
      synchronize: true,
    }),
  ],
  providers: [ReactionRepository],
  controllers: [ReactionController],
})
export class ReactionModule {}
