import {Module} from '@nestjs/common';
import {PrivacyPolicyEntity} from './privacy-policy.entity';
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
      entities: [PrivacyPolicyEntity],
      synchronize: true,
    }),
  ],
  providers: [PrivacyRepository, PrivacyResolver],
  controllers: [PrivacyController],
})
export class PrivacyModule {}
