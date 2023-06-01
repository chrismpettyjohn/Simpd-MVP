import Stripe from 'stripe';
import {Injectable} from '@nestjs/common';
import {generateStripeClient} from './stripe-client.decorator';

@Injectable()
export class StripeCustomerService {
  private readonly stripeClient: Stripe = generateStripeClient();

  async createCustomer(email: string): Promise<Stripe.Customer> {
    return this.stripeClient.customers.create({email});
  }

  async getCustomer(
    customerId: string
  ): Promise<Stripe.Customer | Stripe.DeletedCustomer> {
    return this.stripeClient.customers.retrieve(customerId);
  }

  async updateCustomer(
    customerId: string,
    data: Stripe.CustomerUpdateParams
  ): Promise<Stripe.Customer> {
    return this.stripeClient.customers.update(customerId, data);
  }

  async deleteCustomer(customerId: string): Promise<Stripe.DeletedCustomer> {
    return this.stripeClient.customers.del(customerId);
  }

  async listCustomers(): Promise<Stripe.ApiList<Stripe.Customer>> {
    return this.stripeClient.customers.list();
  }
}
