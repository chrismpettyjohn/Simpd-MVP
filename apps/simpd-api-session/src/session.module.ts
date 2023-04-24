import {Module} from '@nestjs/common';
import {SessionEntity} from './session.entity';
import {SessionResolver} from './session.resolver';
import {SessionRepository} from './session.repository';
import {GraphQLModule, DatabaseModule, CommonModule} from '@simpd/api-lib';

@Module({
  imports: [
    CommonModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [SessionEntity],
      synchronize: true,
    }),
  ],
  providers: [SessionRepository, SessionResolver],
})
export class SessionModule {}
