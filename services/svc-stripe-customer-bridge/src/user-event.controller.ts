import {Controller} from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices';
import {StripeCustomerBridgeService} from './stripe-customer-bridge.service';
import {
  UserWire,
  SVC_USER_INTERNAL_EVENT_USER_CREATED,
} from '@simpd/lib-client';
@Controller()
export class CustomerEventController {
  constructor(
    private readonly stripeCustomerBridgeService: StripeCustomerBridgeService
  ) {}

  @EventPattern(SVC_USER_INTERNAL_EVENT_USER_CREATED)
  async handleUserCreated(data: UserWire) {
    await this.stripeCustomerBridgeService.onUserCreated(data);
  }
}
