import {Module} from '@nestjs/common';
import {StripeCustomerService} from './customer.service';
import {StripeWebhookService} from './webhook.service';
import {StripePaymentMethodService} from './payment-method.service';

@Module({
  providers: [
    StripeCustomerService,
    StripePaymentMethodService,
    StripeWebhookService,
  ],
  exports: [
    StripeCustomerService,
    StripePaymentMethodService,
    StripeWebhookService,
  ],
})
export class StripeModule {}
