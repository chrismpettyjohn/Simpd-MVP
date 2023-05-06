import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {PrivacyFindOneInput, PrivacyWire} from './privacy-client.types';
import {
  SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_PRIVACY_NAME,
} from './privacy.const';

@Injectable()
export class PrivacyClientService {
  constructor(@Inject(SVC_PRIVACY_NAME) private client: ClientProxy) {}

  async findOneByID({id}: PrivacyFindOneInput): Promise<PrivacyWire> {
    const matchingPrivacy$ = this.client.send(
      SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingPrivacy$);
  }
}
