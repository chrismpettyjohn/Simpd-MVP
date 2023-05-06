import {Module} from '@nestjs/common';
import {PrivacyEntity} from './privacy.entity';
import {PrivacyResolver} from './privacy.resolver';
import {PrivacyController} from './privacy.controller';
import {PrivacyRepository} from './privacy.repository';
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
      entities: [PrivacyEntity],
      synchronize: true,
    }),
  ],
  providers: [PrivacyRepository, PrivacyResolver],
  controllers: [PrivacyController],
})
export class PrivacyModule {}
