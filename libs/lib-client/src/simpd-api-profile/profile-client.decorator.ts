import {Inject} from '@nestjs/common';
import {SVC_PROFILE_NAME} from './profile.const';

export const ProfileClient = () => Inject(SVC_PROFILE_NAME);
