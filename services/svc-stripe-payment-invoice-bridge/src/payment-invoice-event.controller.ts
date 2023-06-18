import {Controller} from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices';
import {
  PaymentInvoiceWire,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_INVOICE_CREATED,
} from '@simpd/lib-client';
import {StripePaymentInvoiceBridgeService} from './stripe-payment-invoice-bridge.service';

@Controller()
export class PaymentInvoiceEventController {
  constructor(
    private readonly paymentInvoiceBridgeService: StripePaymentInvoiceBridgeService
  ) {}

  @EventPattern(SVC_PAYMENT_INVOICE_INTERNAL_EVENT_INVOICE_CREATED)
  async handleInvoiceCreated(data: PaymentInvoiceWire) {
    await this.paymentInvoiceBridgeService.onPaymentInvoiceCreated(data);
  }
}
