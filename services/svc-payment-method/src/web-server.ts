import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {PaymentMethodModule} from './payment-method.module';
import {SVC_PAYMENT_METHOD_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(
  PaymentMethodModule,
  SVC_PAYMENT_METHOD_WEB_PORT,
  'payment-method'
);
