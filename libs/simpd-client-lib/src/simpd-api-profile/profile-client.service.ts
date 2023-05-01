import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {ProfileFindOneInput, ProfileWire} from './profile-client.types';
import {
  SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_PROFILE_NAME,
} from './profile.const';

@Injectable()
export class ProfileClientService {
  constructor(@Inject(SVC_PROFILE_NAME) private client: ClientProxy) {}

  async findOneByID({id}: ProfileFindOneInput): Promise<ProfileWire> {
    const matchingProfile$ = this.client.send(
      SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingProfile$);
  }
}
