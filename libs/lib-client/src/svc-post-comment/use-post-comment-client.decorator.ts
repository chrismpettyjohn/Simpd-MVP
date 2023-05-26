import {Inject} from '@nestjs/common';
import {SVC_POST_COMMENT_NAME} from './post-comment.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePostCommentClient: () => ClientProxy = () =>
  Inject(SVC_POST_COMMENT_NAME) as any;
