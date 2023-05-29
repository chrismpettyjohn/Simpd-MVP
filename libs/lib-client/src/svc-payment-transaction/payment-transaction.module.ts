import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {SVC_PAYMENT_TRANSACTION_NAME} from './payment-transaction.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PAYMENT_TRANSACTION_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
})
export class PaymentTransactionClientModule {}
