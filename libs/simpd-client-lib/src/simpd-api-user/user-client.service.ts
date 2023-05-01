import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {UserFindOneInput, UserWire} from './user-client.types';
import {
  USER_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  USER_SERVICE_NAME,
} from './user.const';

@Injectable()
export class UserClientService {
  constructor(@Inject(USER_SERVICE_NAME) private client: ClientProxy) {}

  async findOneByID({id}: UserFindOneInput): Promise<UserWire> {
    const matchingUser$ = this.client.send(
      USER_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingUser$);
  }
}
