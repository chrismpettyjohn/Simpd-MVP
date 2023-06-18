import 'dotenv/config';
import {PostModule} from './post.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_POST_WEB_PORT} from 'libs/lib-client/src/svc-post/post.const';

dynamicServiceBootstrap(PostModule, SVC_POST_WEB_PORT, 'post');
