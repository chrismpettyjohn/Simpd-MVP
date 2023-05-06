import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserFindOneInput, UserWire } from './user-client.types';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE,
  SVC_USER_NAME,
} from './user.const';

@Injectable()
export class UserClientService {
  constructor(@Inject(SVC_USER_NAME) private client: ClientProxy) { }

  async findOne({ id }: UserFindOneInput): Promise<UserWire> {
    const matchingUser$ = this.client.send(
      SVC_USER_INTERNAL_EVENT_FIND_ONE,
      { id }
    );
    return await lastValueFrom(matchingUser$);
  }
}
