import 'dotenv/config';
import {PostModule} from './post.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_POST_WEB_PORT} from 'libs/lib-client/src/svc-post/post.const';

bootstrapDynamicService(PostModule, SVC_POST_WEB_PORT, 'post');
