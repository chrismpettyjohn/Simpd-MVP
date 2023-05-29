import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_METHOD_NAME} from './payment-method.const';

export const PaymentMethodClient = () => Inject(SVC_PAYMENT_METHOD_NAME);
