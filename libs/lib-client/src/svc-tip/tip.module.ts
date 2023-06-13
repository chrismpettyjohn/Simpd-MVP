import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_TIP_NAME} from './tip.const';
import {TipClientService} from './tip-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_TIP_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [TipClientService],
  exports: [TipClientService],
})
export class TipClientModule {}
