import { Module } from '@nestjs/common';
import { GraphQLModule, DatabaseModule } from '@simpd/api-lib';

@Module({
  imports: [
    GraphQLModule,
    DatabaseModule,
  ]
})
export class UsersModule { }
