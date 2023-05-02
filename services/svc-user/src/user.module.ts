import {Module} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {UserResolver} from './user.resolver';
import {UserService} from './user-service';
import {UserController} from './user.controller';
import {UserRepository} from './user.repository';
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
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  providers: [UserRepository, UserResolver, UserService],
  controllers: [UserController],
})
export class UserModule {}
