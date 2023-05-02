import {Inject} from '@nestjs/common';
import {SVC_POST_NAME} from './post.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePostClient: () => ClientProxy = () =>
  Inject(SVC_POST_NAME) as any;
