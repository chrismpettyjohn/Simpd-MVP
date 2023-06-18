import 'dotenv/config';
import {TagModule} from './tag.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_TAG_NAME,
  SVC_TAG_WEB_PORT,
} from 'libs/lib-client/src/svc-tag/tag.const';

dynamicServiceBootstrap(SVC_TAG_NAME, TagModule, SVC_TAG_WEB_PORT, 'tag');
