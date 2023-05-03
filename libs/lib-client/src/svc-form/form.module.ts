import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_FORM_NAME} from './form.const';
import {FormClientService} from './form-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_FORM_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [FormClientService],
  exports: [FormClientService],
})
export class FormClientModule {}
