import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE,
  SVC_USER_INTERNAL_EVENT_PASSWORD_COMPARISON,
  SVC_USER_NAME,
} from './user.const';
import {
  UserFindOneInput,
  UserPasswordComparisonInput,
  UserPasswordComparisonResponse,
  UserWire,
} from './user-client.types';

@Injectable()
export class UserClientService {
  constructor(@Inject(SVC_USER_NAME) private client: ClientProxy) {}

  async findOne({id}: UserFindOneInput): Promise<UserWire> {
    const matchingUser$ = this.client.send(SVC_USER_INTERNAL_EVENT_FIND_ONE, {
      id,
    });
    return await lastValueFrom(matchingUser$);
  }

  async passwordComparison({
    id,
    password,
  }: UserPasswordComparisonInput): Promise<UserPasswordComparisonResponse> {
    const matchingPassword$ = this.client.send(
      SVC_USER_INTERNAL_EVENT_PASSWORD_COMPARISON,
      {
        id,
        password,
      }
    );
    return await lastValueFrom(matchingPassword$);
  }
}
