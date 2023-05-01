import {Module} from '@nestjs/common';
import {SessionEntity} from './session.entity';
import {SessionService} from './session.service';
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
  providers: [SessionRepository, SessionResolver, SessionService],
  controllers: [SessionController],
})
export class SessionServiceModule {}
