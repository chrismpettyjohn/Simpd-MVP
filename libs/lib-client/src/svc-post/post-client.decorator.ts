import {Inject} from '@nestjs/common';
import {SVC_POST_NAME} from './post.const';

export const PostClient = () => Inject(SVC_POST_NAME);
