import 'dotenv/config';
import {CommentModule} from './comment.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_COMMENT_WEB_PORT} from 'libs/lib-client/src/svc-comment/comment.const';

dynamicServiceBootstrap(CommentModule, SVC_COMMENT_WEB_PORT, 'comment');
