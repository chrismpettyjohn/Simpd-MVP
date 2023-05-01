import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {UserFindOneInput, UserWire} from './user-client.types';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_USER_NAME,
} from './user.const';

@Injectable()
export class UserClientService {
  constructor(@Inject(SVC_USER_NAME) private client: ClientProxy) {}

  async findOneByID({id}: UserFindOneInput): Promise<UserWire> {
    const matchingUser$ = this.client.send(
      SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingUser$);
  }
}
