import {Controller} from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices';
import {
  PaymentMethodWire,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_METHOD_CREATED,
} from '@simpd/lib-client';
import {StripePaymentMethodBridgeService} from './stripe-payment-method-bridge.service';

@Controller()
export class PaymentMethodEventController {
  constructor(
    private readonly paymentMethodBridgeService: StripePaymentMethodBridgeService
  ) {}

  @EventPattern(SVC_PAYMENT_METHOD_INTERNAL_EVENT_METHOD_CREATED)
  async handleMethodCreated(data: PaymentMethodWire) {
    await this.paymentMethodBridgeService.onPaymentMethodCreated(data);
  }
}
