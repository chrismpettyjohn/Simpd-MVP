import {Inject} from '@nestjs/common';
import {SVC_TAG_NAME} from './tag.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseTagClient: () => ClientProxy = () =>
  Inject(SVC_TAG_NAME) as any;
