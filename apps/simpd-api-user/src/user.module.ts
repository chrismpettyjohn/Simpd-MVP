import {Module} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {UserResolver} from './user.resolver';
import {UserController} from './user.controller';
import {UserRepository} from './user.repository';
import {GraphQLModule, DatabaseModule, CommonModule} from '@simpd/api-lib';

@Module({
  imports: [
    CommonModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  providers: [UserRepository, UserResolver],
  controllers: [UserController],
})
export class UserModule {}
