import { Inject } from '@nestjs/common';
import { SVC_POST_COMMENT_NAME } from './post-comment.const';

export const PostCommentClient = () => Inject(SVC_POST_COMMENT_NAME);
