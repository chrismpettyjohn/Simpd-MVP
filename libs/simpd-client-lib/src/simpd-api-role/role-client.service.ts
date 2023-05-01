import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {RoleFindOneInput, RoleWire} from './role-client.types';
import {
  ROLE_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  ROLE_SERVICE_NAME,
} from './role.const';

@Injectable()
export class RoleClientService {
  constructor(@Inject(ROLE_SERVICE_NAME) private client: ClientProxy) {}

  async findOneByID({id}: RoleFindOneInput): Promise<RoleWire> {
    const matchingRole$ = this.client.send(
      ROLE_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingRole$);
  }
}
