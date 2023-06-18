import 'dotenv/config';
import {reactiveMicroserviceBootstrap} from '@simpd/lib-api';
import {ProfileUserBridgeModule} from './profile-user-bridge.module';

reactiveMicroserviceBootstrap(ProfileUserBridgeModule, 'profile-user-bridge');
