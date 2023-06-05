import {Module} from '@nestjs/common';
import {StripeModule} from '@simpd/lib-stripe';
import {StripeWebhookGuard} from './stripe-webhook.guard';
import {StripePaymentMethodService} from './payment-method.service';
import {StripeWebhookExternalController} from './stripe-webhook.controller';
import {PaymentMethodClientModule, UserClientModule} from '@simpd/lib-client';

@Module({
  imports: [StripeModule, PaymentMethodClientModule, UserClientModule],
  controllers: [StripeWebhookExternalController],
  providers: [StripeWebhookGuard, StripePaymentMethodService],
})
export class StripeWebhookModule {}
