import {Module} from '@nestjs/common';
import {RoleEntity} from './role.entity';
import {RoleResolver} from './role.resolver';
import {RoleRepository} from './role.repository';
import {GraphQLModule, DatabaseModule, CommonModule} from '@simpd/api-lib';
import {RoleController} from './role.controller';

@Module({
  imports: [
    CommonModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [RoleEntity],
      synchronize: true,
    }),
  ],
  providers: [RoleRepository, RoleResolver],
  controllers: [RoleController],
})
export class RoleModule {}
