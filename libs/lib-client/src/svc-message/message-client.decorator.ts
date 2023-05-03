import {Inject} from '@nestjs/common';
import {SVC_MESSAGE_NAME} from './message.const';

export const MessageClient = () => Inject(SVC_MESSAGE_NAME);
