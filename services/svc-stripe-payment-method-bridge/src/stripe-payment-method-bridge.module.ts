import {Module} from '@nestjs/common';
import {StripeModule} from '@simpd/lib-stripe';
import {PaymentMethodClientModule, UserClientModule} from '@simpd/lib-client';
import {PaymentMethodEventController} from './payment-method-event.controller';
import {StripePaymentMethodBridgeService} from './stripe-payment-method-bridge.service';

@Module({
  imports: [PaymentMethodClientModule, StripeModule, UserClientModule],
  providers: [StripePaymentMethodBridgeService],
  controllers: [PaymentMethodEventController],
})
export class StripePaymentMethodBridgeModule {}
