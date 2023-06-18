import {Module} from '@nestjs/common';
import {StripeWebhookService} from './webhook.service';
import {StripeInvoiceService} from './invoice.service';
import {StripeCustomerService} from './customer.service';
import {StripePaymentMethodService} from './payment-method.service';

@Module({
  providers: [
    StripeInvoiceService,
    StripeCustomerService,
    StripePaymentMethodService,
    StripeWebhookService,
  ],
  exports: [
    StripeInvoiceService,
    StripeCustomerService,
    StripePaymentMethodService,
    StripeWebhookService,
  ],
})
export class StripeModule {}
