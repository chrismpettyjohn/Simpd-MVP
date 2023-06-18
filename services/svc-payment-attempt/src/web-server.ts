import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {PaymentAttemptModule} from './payment-attempt.module';
import {SVC_PAYMENT_ATTEMPT_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(
  PaymentAttemptModule,
  SVC_PAYMENT_ATTEMPT_WEB_PORT,
  'payment-attempt'
);
