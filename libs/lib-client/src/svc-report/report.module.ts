import { Module } from '@nestjs/common';
import { NATS_ADDRESS } from '../constants';
import { SVC_REPORT_NAME } from './report.const';
import { ReportClientService } from './report-client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_REPORT_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [ReportClientService],
  exports: [ReportClientService],
})
export class ReportClientModule { }
