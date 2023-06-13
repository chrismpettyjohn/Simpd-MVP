import {Inject} from '@nestjs/common';
import {SVC_TIP_NAME} from './tip.const';

export const TipClient = () => Inject(SVC_TIP_NAME);
