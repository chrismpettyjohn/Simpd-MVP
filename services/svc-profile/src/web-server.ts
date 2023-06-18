import 'dotenv/config';
import {ProfileModule} from './profile.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_PROFILE_WEB_PORT} from 'libs/lib-client/src/svc-profile/profile.const';

bootstrapDynamicService(ProfileModule, SVC_PROFILE_WEB_PORT, 'profile');
