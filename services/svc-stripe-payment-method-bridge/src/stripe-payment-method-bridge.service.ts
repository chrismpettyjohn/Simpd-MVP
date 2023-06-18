import {Injectable} from '@nestjs/common';
import {PaymentMethodWire, UserClientService} from '@simpd/lib-client';
import {StripePaymentMethodService} from 'libs/lib-stripe/src/payment-method.service';

@Injectable()
export class StripePaymentMethodBridgeService {
  constructor(
    private readonly stripePaymentMethodService: StripePaymentMethodService,
    private readonly userClientService: UserClientService
  ) {}

  async onPaymentMethodCreated(
    paymentMethod: PaymentMethodWire
  ): Promise<void> {
    console.log('Received invoice created event', paymentMethod);

    const matchingUser = await this.userClientService.findOne({
      id: paymentMethod.id,
    });

    await this.stripePaymentMethodService.createPaymentMethod({});
  }
}
