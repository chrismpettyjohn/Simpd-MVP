import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {FormFindOneInput, FormWire} from './form-client.types';
import {SVC_FORM_INTERNAL_EVENT_FIND_ONE, SVC_FORM_NAME} from './form.const';

@Injectable()
export class FormClientService {
  constructor(@Inject(SVC_FORM_NAME) private client: ClientProxy) {}

  async findOne(input: FormFindOneInput): Promise<FormWire> {
    const matchingForm$ = this.client.send(
      SVC_FORM_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingForm$);
  }
}
