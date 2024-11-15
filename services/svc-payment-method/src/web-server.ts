import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {PaymentMethodModule} from './payment-method.module';
import {
  SVC_PAYMENT_METHOD_NAME,
  SVC_PAYMENT_METHOD_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_PAYMENT_METHOD_NAME,
  PaymentMethodModule,
  SVC_PAYMENT_METHOD_WEB_PORT,
  'payment-method'
);
