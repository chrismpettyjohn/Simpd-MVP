import { Module } from '@nestjs/common';
import { SessionEntity } from './session.entity';
import { SessionService } from './session.service';
import { SessionResolver } from './session.resolver';
import { SessionController } from './session.controller';
import { SessionRepository } from './session.repository';
import { RoleClientModule, UserClientModule } from '@simpd/lib-client';
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
export class SessionServiceModule { }
