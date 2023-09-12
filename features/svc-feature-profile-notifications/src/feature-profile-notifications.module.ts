import {Module} from '@nestjs/common';
import {
  ProfileSubscriptionGroupClientModule,
  TipClientModule,
} from '@simpd/lib-client';
@Module({
  imports: [ProfileSubscriptionGroupClientModule, TipClientModule],
})
export class FeatureProfileNotificationsModule {}
