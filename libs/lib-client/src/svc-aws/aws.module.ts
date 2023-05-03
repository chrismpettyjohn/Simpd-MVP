import { Module } from '@nestjs/common';
import { NATS_ADDRESS } from '../constants';
import { SVC_AWS_NAME } from './aws.const';
import { AWSClientService } from './aws-client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_AWS_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [AWSClientService],
  exports: [AWSClientService],
})
export class AWSClientModule { }
