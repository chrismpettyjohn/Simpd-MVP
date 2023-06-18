import {Injectable} from '@nestjs/common';
import {StripeInvoiceService} from '@simpd/lib-stripe';
import {PaymentInvoiceWire, UserClientService} from '@simpd/lib-client';

@Injectable()
export class StripePaymentInvoiceBridgeService {
  constructor(
    private readonly stripePaymentInvoiceService: StripeInvoiceService,
    private readonly userClientService: UserClientService
  ) {}

  async onPaymentInvoiceCreated(
    paymentInvoice: PaymentInvoiceWire
  ): Promise<void> {
    console.log('Received invoice created event', paymentInvoice);

    const matchingUser = await this.userClientService.findOne({
      id: paymentInvoice.id,
    });

    await this.stripePaymentInvoiceService.createInvoice({});
  }
}
