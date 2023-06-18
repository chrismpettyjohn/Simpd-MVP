import 'dotenv/config';
import {FormModule} from './form.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_FORM_WEB_PORT} from 'libs/lib-client/src/svc-form/form.const';

bootstrapDynamicService(FormModule, SVC_FORM_WEB_PORT, 'form');
