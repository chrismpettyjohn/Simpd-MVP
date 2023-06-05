import Stripe from 'stripe';
import {BadRequestException, Injectable} from '@nestjs/common';
import {PaymentProvider, UserClientService} from '@simpd/lib-client';
import {StripePaymentMethodAttachedEventPayload} from './payment-method.types';
import {PaymentMethodClientService} from 'libs/lib-client/src/svc-payment-method/payment-method-client.service';

@Injectable()
export class StripePaymentMethodService {
  constructor(
    private readonly userClientService: UserClientService,
    private readonly paymentMethodClientService: PaymentMethodClientService
  ) {}

  async onPaymentMethodAttached(
    event: StripePaymentMethodAttachedEventPayload
  ) {
    const userEmailAddress = event.data.object.billing_details.email;
    const userHasEmail = !!userEmailAddress;

    if (!userHasEmail) {
      throw new BadRequestException('User email address is required');
    }

    const matchingUser = await this.userClientService.findOne({
      email: userEmailAddress,
    });

    await this.paymentMethodClientService.createOne({
      userID: matchingUser.id!,
      provider: PaymentProvider.Stripe,
      providerID: event.data.object.id,
      providerDetails: event as any,
      billingAddress: {
        country: event.data.object.billing_details.address.country!,
        city: event.data.object.billing_details.address.city!,
        street_address: event.data.object.billing_details.address.line1!,
        street_address2: event.data.object.billing_details.address.line2!,
        postal_code: event.data.object.billing_details.address.postal_code!,
        state: event.data.object.billing_details.address.state!,
      },
      cardDetails: {
        brand: event.data.object.card.brand,
        country: event.data.object.card.country,
        exp_month: event.data.object.card.exp_month,
        exp_year: event.data.object.card.exp_year,
        last4: event.data.object.card.last4,
      },
    });
  }
}
