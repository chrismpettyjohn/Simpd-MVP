import {lastValueFrom} from 'rxjs';
import {USER_SERVICE_NAME} from './user.const';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {UserFindOneInput, UserWire} from './user-client.types';

@Injectable()
export class UserClientService {
  constructor(@Inject(USER_SERVICE_NAME) private client: ClientProxy) {}

  findOneByID({id}: UserFindOneInput): Promise<UserWire> {
    const matchingUser$ = this.client.emit('findOneByID', {id});
    return lastValueFrom(matchingUser$);
  }
}
