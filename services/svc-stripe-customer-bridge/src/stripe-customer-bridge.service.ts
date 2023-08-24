import {Injectable} from '@nestjs/common';
import {UserWire} from '@simpd/lib-client';
import {StripeCustomerService} from '@simpd/lib-stripe';

@Injectable()
export class StripeCustomerBridgeService {
  constructor(private readonly stripeCustomerService: StripeCustomerService) {}

  async onUserCreated(user: UserWire): Promise<void> {
    await this.stripeCustomerService.createCustomer(user.email);
  }
}
