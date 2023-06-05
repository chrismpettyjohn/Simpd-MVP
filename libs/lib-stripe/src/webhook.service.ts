import Stripe from 'stripe';
import {Injectable} from '@nestjs/common';
import {generateStripeClient} from './stripe-client.decorator';

@Injectable()
export class StripeWebhookService {
  private readonly stripeClient: Stripe = generateStripeClient();

  async verifyEvent(
    payload: string | Buffer,
    signatureValue: string,
    webhookSecret: string
  ): Promise<Stripe.Event> {
    return await this.stripeClient.webhooks.constructEvent(
      payload,
      signatureValue,
      webhookSecret
    );
  }
}
