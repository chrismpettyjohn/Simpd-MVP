import {Inject} from '@nestjs/common';
import {SVC_SESSION_NAME} from './session.const';

export const SessionClient = () => Inject(SVC_SESSION_NAME);
