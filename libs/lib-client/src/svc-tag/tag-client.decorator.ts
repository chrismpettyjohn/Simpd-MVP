import {Inject} from '@nestjs/common';
import {SVC_TAG_NAME} from './tag.const';

export const TagClient = () => Inject(SVC_TAG_NAME);
