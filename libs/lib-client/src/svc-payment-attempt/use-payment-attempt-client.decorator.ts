import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_ATTEMPT_NAME} from './payment-attempt.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePaymentAttemptClient: () => ClientProxy = () =>
  Inject(SVC_PAYMENT_ATTEMPT_NAME) as any;
