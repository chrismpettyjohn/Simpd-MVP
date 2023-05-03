import {Inject} from '@nestjs/common';
import {SVC_FORM_NAME} from './form.const';

export const FormClient = () => Inject(SVC_FORM_NAME);
