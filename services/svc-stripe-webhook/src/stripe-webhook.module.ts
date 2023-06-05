import {Module} from '@nestjs/common';
import {StripeModule} from '@simpd/lib-stripe';
import {StripeWebhookGuard} from './stripe-webhook.guard';
import {StripeWebhookExternalController} from './stripe-webhook.controller';

@Module({
  imports: [StripeModule],
  controllers: [StripeWebhookExternalController],
  providers: [StripeWebhookGuard],
})
export class StripeWebhookModule {}
