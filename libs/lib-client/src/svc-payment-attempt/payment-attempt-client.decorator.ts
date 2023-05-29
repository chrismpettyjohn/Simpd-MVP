import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_ATTEMPT_NAME} from './payment-attempt.const';

export const PaymentAttemptClient = () => Inject(SVC_PAYMENT_ATTEMPT_NAME);
