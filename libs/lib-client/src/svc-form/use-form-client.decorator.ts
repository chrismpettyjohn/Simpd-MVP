import {Inject} from '@nestjs/common';
import {SVC_FORM_NAME} from './form.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseFormClient: () => ClientProxy = () =>
  Inject(SVC_FORM_NAME) as any;
