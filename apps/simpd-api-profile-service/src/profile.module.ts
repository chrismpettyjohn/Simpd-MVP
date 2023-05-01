import {Module} from '@nestjs/common';
import {ProfileEntity} from './profile.entity';
import {ProfileResolver} from './profile.resolver';
import {ProfileController} from './profile.controller';
import {ProfileRepository} from './profile.repository';
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
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [ProfileEntity],
      synchronize: true,
    }),
  ],
  providers: [ProfileRepository, ProfileResolver],
  controllers: [ProfileController],
})
export class ProfileModule {}
