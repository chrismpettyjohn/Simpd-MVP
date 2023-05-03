import {Inject} from '@nestjs/common';
import {SVC_COMMENT_NAME} from './comment.const';

export const CommentClient = () => Inject(SVC_COMMENT_NAME);
