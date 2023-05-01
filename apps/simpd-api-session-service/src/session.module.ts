import {Module} from '@nestjs/common';
import {SessionEntity} from './session.entity';
import {SessionResolver} from './session.resolver';
import {SessionController} from './session.controller';
import {SessionRepository} from './session.repository';
import {RoleClientModule, UserClientModule} from '@simpd/client-lib';
import {
  GraphQLModule,
  DatabaseModule,
  CommonModule,
  SessionModule,
} from '@simpd/api-lib';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    UserClientModule,
    RoleClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [SessionEntity],
      synchronize: true,
    }),
  ],
  providers: [SessionRepository, SessionResolver],
  controllers: [SessionController],
})
export class SessionServiceModule {}
