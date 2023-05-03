import 'dotenv/config';
import {TagModule} from './tag.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_TAG_WEB_PORT} from 'libs/lib-client/src/svc-tag/tag.const';

bootstrapDynamicService(TagModule, SVC_TAG_WEB_PORT);
