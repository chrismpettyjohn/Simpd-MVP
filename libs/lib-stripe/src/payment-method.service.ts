import Stripe from 'stripe';
import {Injectable} from '@nestjs/common';
import {generateStripeClient} from './stripe-client.decorator';

@Injectable()
export class StripePaymentMethodService {
  private readonly stripeClient: Stripe = generateStripeClient();

  async createPaymentMethod(
    newPaymentMethod: Stripe.PaymentMethodCreateParams
  ): Promise<Stripe.PaymentMethod> {
    return this.stripeClient.paymentMethods.create(newPaymentMethod);
  }

  async getPaymentMethod(
    paymentMethodId: string
  ): Promise<Stripe.PaymentMethod> {
    return this.stripeClient.paymentMethods.retrieve(paymentMethodId);
  }

  async updatePaymentMethod(
    paymentMethodId: string,
    data: Stripe.PaymentMethodUpdateParams
  ): Promise<Stripe.PaymentMethod> {
    return this.stripeClient.paymentMethods.update(paymentMethodId, data);
  }

  async deletePaymentMethod(
    paymentMethodId: string
  ): Promise<Stripe.PaymentMethod> {
    return this.stripeClient.paymentMethods.detach(paymentMethodId);
  }

  async listPaymentMethods(): Promise<Stripe.ApiList<Stripe.PaymentMethod>> {
    return this.stripeClient.paymentMethods.list();
  }
}
