import {Inject} from '@nestjs/common';
import {PROFILE_SERVICE_NAME} from './profile.const';

export const ProfileClient = () => Inject(PROFILE_SERVICE_NAME);
