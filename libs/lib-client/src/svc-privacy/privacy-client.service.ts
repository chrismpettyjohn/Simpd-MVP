import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  PrivacyCreateOneInput,
  PrivacyFindOneInput,
  PrivacyWire,
} from './privacy-client.types';
import {
  SVC_PRIVACY_INTERNAL_EVENT_CREATE_ONE,
  SVC_PRIVACY_INTERNAL_EVENT_DELETE_ONE,
  SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE,
  SVC_PRIVACY_INTERNAL_EVENT_UPDATE_ONE,
  SVC_PRIVACY_NAME,
} from './privacy.const';

@Injectable()
export class PrivacyClientService {
  constructor(@Inject(SVC_PRIVACY_NAME) private client: ClientProxy) {}

  async findOne(input: PrivacyFindOneInput): Promise<PrivacyWire | null> {
    const matchingPrivacy$ = this.client.send(
      SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE,
      {input}
    );
    return await lastValueFrom(matchingPrivacy$);
  }

  async createOne(input: PrivacyCreateOneInput): Promise<PrivacyWire> {
    const createdPrivacy$ = this.client.send(
      SVC_PRIVACY_INTERNAL_EVENT_CREATE_ONE,
      {input}
    );
    return await lastValueFrom(createdPrivacy$);
  }

  async updateOne(
    filter: PrivacyFindOneInput,
    input: PrivacyCreateOneInput
  ): Promise<boolean> {
    const createdPrivacy$ = this.client.send(
      SVC_PRIVACY_INTERNAL_EVENT_UPDATE_ONE,
      {filter, input}
    );
    return await lastValueFrom(createdPrivacy$);
  }

  async deleteOne(filter: PrivacyFindOneInput): Promise<boolean> {
    const createdPrivacy$ = this.client.send(
      SVC_PRIVACY_INTERNAL_EVENT_DELETE_ONE,
      {filter}
    );
    return await lastValueFrom(createdPrivacy$);
  }
}
