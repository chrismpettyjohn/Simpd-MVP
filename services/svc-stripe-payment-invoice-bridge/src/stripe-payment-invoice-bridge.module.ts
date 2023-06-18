import {Module} from '@nestjs/common';
import {StripeModule} from '@simpd/lib-stripe';
import {PaymentInvoiceClientModule, UserClientModule} from '@simpd/lib-client';
import {PaymentInvoiceEventController} from './payment-invoice-event.controller';
import {StripePaymentInvoiceBridgeService} from './stripe-payment-invoice-bridge.service';

@Module({
  imports: [PaymentInvoiceClientModule, StripeModule, UserClientModule],
  providers: [StripePaymentInvoiceBridgeService],
  controllers: [PaymentInvoiceEventController],
})
export class StripePaymentInvoiceBridgeModule {}
