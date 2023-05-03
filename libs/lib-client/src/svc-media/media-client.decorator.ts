import {Inject} from '@nestjs/common';
import {SVC_MEDIA_NAME} from './media.const';

export const MediaClient = () => Inject(SVC_MEDIA_NAME);
