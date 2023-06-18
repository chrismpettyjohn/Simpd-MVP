import 'dotenv/config';
import {reactiveMicroserviceBootstrap} from '@simpd/lib-api';
import {SVC_PROFILE_USER_BRIDGE_NAME} from '@simpd/lib-client';

reactiveMicroserviceBootstrap(
  SVC_PROFILE_USER_BRIDGE_NAME,
  'profile-user-bridge'
);
