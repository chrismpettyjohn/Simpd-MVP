import {Module} from '@nestjs/common';
import {StripeCustomerService} from './customer.service';
import {StripePaymentMethodService} from './payment-method.service';

@Module({
  providers: [StripeCustomerService, StripePaymentMethodService],
  exports: [StripeCustomerService, StripePaymentMethodService],
})
export class StripeModule {}
