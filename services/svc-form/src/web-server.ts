import 'dotenv/config';
import {FormModule} from './form.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_FORM_NAME,
  SVC_FORM_WEB_PORT,
} from 'libs/lib-client/src/svc-form/form.const';

dynamicServiceBootstrap(SVC_FORM_NAME, FormModule, SVC_FORM_WEB_PORT, 'form');
