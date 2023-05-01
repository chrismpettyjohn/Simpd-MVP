import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {ProfileFindOneInput, ProfileWire} from './profile-client.types';
import {
  PROFILE_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  PROFILE_SERVICE_NAME,
} from './profile.const';

@Injectable()
export class ProfileClientService {
  constructor(@Inject(PROFILE_SERVICE_NAME) private client: ClientProxy) {}

  async findOneByID({id}: ProfileFindOneInput): Promise<ProfileWire> {
    const matchingProfile$ = this.client.send(
      PROFILE_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingProfile$);
  }
}
