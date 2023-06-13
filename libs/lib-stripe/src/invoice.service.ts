import {Injectable} from '@nestjs/common';
import Stripe from 'stripe';
import {generateStripeClient} from './stripe-client.decorator';

@Injectable()
export class StripeInvoiceService {
  private readonly stripeClient: Stripe = generateStripeClient();

  createInvoice(): Promise<Stripe.Invoice> {
    return this.stripeClient.invoices.create({});
  }
}
