import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {ReportFindOneInput, ReportWire} from './report-client.types';
import {
  SVC_REPORT_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_REPORT_NAME,
} from './report.const';

@Injectable()
export class ReportClientService {
  constructor(@Inject(SVC_REPORT_NAME) private client: ClientProxy) {}

  async findOneByID({id}: ReportFindOneInput): Promise<ReportWire> {
    const matchingReport$ = this.client.send(
      SVC_REPORT_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingReport$);
  }
}
