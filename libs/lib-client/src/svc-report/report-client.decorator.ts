import {Inject} from '@nestjs/common';
import {SVC_REPORT_NAME} from './report.const';

export const ReportClient = () => Inject(SVC_REPORT_NAME);
