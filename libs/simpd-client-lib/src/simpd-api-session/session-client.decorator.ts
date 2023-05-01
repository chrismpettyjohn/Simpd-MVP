import {Inject} from '@nestjs/common';
import {SESSION_SERVICE_NAME} from './session.const';

export const SessionClient = () => Inject(SESSION_SERVICE_NAME);
