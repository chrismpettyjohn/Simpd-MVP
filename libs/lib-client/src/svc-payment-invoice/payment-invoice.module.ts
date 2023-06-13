import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {SVC_PAYMENT_INVOICE_NAME} from './payment-invoice.const';
import {PaymentInvoiceClientService} from './payment-invoice-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PAYMENT_INVOICE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [PaymentInvoiceClientService],
  exports: [PaymentInvoiceClientService],
})
export class PaymentInvoiceClientModule {}
