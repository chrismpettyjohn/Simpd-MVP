import 'dotenv/config';
import {PostModule} from './post.module';
import {bootstrapService} from '@simpd/lib-api';
import {SVC_POST_WEB_PORT} from 'libs/lib-client/src/svc-post/post.const';

bootstrapService(PostModule, SVC_POST_WEB_PORT);
