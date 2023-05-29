import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_PAYMENT_METHOD_NAME} from './payment-method.const';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PAYMENT_METHOD_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
})
export class PaymentMethodClientModule {}
