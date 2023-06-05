import {StripeWebhookService} from '@simpd/lib-stripe';
import {STRIPE_WEBHOOK_SECRET} from './stripe-webhook.const';
import {getRequestFromExecutionContext} from '@simpd/lib-api';
import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';

@Injectable()
export class StripeWebhookGuard implements CanActivate {
  constructor(private readonly stripeWebhookService: StripeWebhookService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: any = getRequestFromExecutionContext(context);
    const stripeSignature: string | undefined =
      request?.header('stripe-signature');
    await this.stripeWebhookService.verifyEvent(
      request.rawBody,
      stripeSignature!,
      STRIPE_WEBHOOK_SECRET
    );
    return true;
  }
}
