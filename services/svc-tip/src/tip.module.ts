import {Module} from '@nestjs/common';
import {TipEntity} from './tip.entity';
import {TipResolver} from './tip.resolver';
import {TipRepository} from './tip.repository';
import {TipController} from './tip.controller';
import {ProfileClientModule} from '@simpd/lib-client';
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
      entities: [TipEntity],
      synchronize: true,
    }),
  ],
  providers: [TipRepository, TipResolver],
  controllers: [TipController],
})
export class TipModule {}
