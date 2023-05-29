import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {SVC_PAYMENT_RECURRING_INVOICE_NAME} from './payment-recurring-invoice.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PAYMENT_RECURRING_INVOICE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
})
export class PaymentRecurringInvoiceClientModule {}
