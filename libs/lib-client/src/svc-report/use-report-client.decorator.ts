import {Inject} from '@nestjs/common';
import {SVC_REPORT_NAME} from './report.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseReportClient: () => ClientProxy = () =>
  Inject(SVC_REPORT_NAME) as any;
