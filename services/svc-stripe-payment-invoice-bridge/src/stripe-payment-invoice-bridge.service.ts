import {Injectable} from '@nestjs/common';
import {PaymentInvoiceWire, UserClientService} from '@simpd/lib-client';
import {StripeCustomerService, StripeInvoiceService} from '@simpd/lib-stripe';

@Injectable()
export class StripePaymentInvoiceBridgeService {
  constructor(
    private readonly userClientService: UserClientService,
    private readonly stripeCustomerService: StripeCustomerService,
    private readonly stripePaymentInvoiceService: StripeInvoiceService
  ) {}

  async onPaymentInvoiceCreated(
    paymentInvoice: PaymentInvoiceWire
  ): Promise<void> {
    const matchingUser = await this.userClientService.findOne({
      id: paymentInvoice.id,
    });

    const stripeCustomer = await this.stripeCustomerService.getCustomerByEmail(
      matchingUser.email
    );

    await this.stripePaymentInvoiceService.createInvoice({
      customer: stripeCustomer.id,
      description: paymentInvoice.description,
      application_fee_amount: paymentInvoice.amountInCents,
    });
  }
}
