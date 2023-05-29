import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_METHOD_NAME} from './payment-method.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePaymentMethodClient: () => ClientProxy = () =>
  Inject(SVC_PAYMENT_METHOD_NAME) as any;
