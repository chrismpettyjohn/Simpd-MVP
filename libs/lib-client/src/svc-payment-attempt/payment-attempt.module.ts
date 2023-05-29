import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_PAYMENT_ATTEMPT_NAME} from './payment-attempt.const';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PAYMENT_ATTEMPT_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
})
export class PaymentAttemptClientModule {}
