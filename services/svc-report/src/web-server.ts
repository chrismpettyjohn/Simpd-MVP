import 'dotenv/config';
import {ReportModule} from './report.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_REPORT_WEB_PORT} from 'libs/lib-client/src/svc-report/report.const';

dynamicServiceBootstrap(ReportModule, SVC_REPORT_WEB_PORT, 'report');
