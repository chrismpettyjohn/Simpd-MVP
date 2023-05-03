import {Inject} from '@nestjs/common';
import {SVC_MEDIA_NAME} from './media.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseMediaClient: () => ClientProxy = () =>
  Inject(SVC_MEDIA_NAME) as any;
