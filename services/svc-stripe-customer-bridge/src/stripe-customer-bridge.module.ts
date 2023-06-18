import {Module} from '@nestjs/common';
import {StripeModule} from '@simpd/lib-stripe';
import {UserClientModule} from '@simpd/lib-client';
import {CustomerEventController} from './user-event.controller';
import {StripeCustomerBridgeService} from './stripe-customer-bridge.service';

@Module({
  imports: [StripeModule, UserClientModule],
  providers: [StripeCustomerBridgeService],
  controllers: [CustomerEventController],
})
export class StripeCustomerBridgeModule {}
