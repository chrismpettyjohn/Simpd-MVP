import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {PaymentAttemptModule} from './payment-attempt.module';
import {SVC_PAYMENT_ATTEMPT_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(PaymentAttemptModule, SVC_PAYMENT_ATTEMPT_WEB_PORT);
