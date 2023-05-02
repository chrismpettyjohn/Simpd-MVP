import {Module} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {UserService} from './user-service';
import {UserResolver} from './user.resolver';
import {UserController} from './user.controller';
import {UserRepository} from './user.repository';
import {RoleClientModule} from '@simpd/lib-client';
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
    RoleClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  providers: [UserRepository, UserResolver, UserService],
  controllers: [UserController],
})
export class UserModule {}
