import {Module} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {UserRepository} from './user.repository';
import {GraphQLModule, DatabaseModule, CommonModule} from '@simpd/api-lib';
import {UserResolver} from './user.resolver';

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
})
export class UsersModule {}
