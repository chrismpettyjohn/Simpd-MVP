import 'dotenv/config';
import {ReportModule} from './report.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_REPORT_WEB_PORT} from 'libs/lib-client/src/svc-report/report.const';

bootstrapDynamicService(ReportModule, SVC_REPORT_WEB_PORT);
