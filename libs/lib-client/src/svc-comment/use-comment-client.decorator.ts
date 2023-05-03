import {Inject} from '@nestjs/common';
import {SVC_COMMENT_NAME} from './comment.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseCommentClient: () => ClientProxy = () =>
  Inject(SVC_COMMENT_NAME) as any;
