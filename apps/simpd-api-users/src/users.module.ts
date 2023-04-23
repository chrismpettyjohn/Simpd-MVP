import {Module} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {UserRepository} from './user.repository';
import {GraphQLModule, DatabaseModule, CommonModule} from '@simpd/api-lib';

@Module({
  imports: [
    CommonModule,
    GraphQLModule.forRoot({}),
    DatabaseModule.forRoot({
      entities: [UserEntity],
    }),
  ],
  providers: [UserRepository],
})
export class UsersModule {}
