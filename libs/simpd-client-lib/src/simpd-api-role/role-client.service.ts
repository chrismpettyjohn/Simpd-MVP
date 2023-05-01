import {lastValueFrom} from 'rxjs';
import {ROLE_SERVICE_NAME} from './role.const';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {RoleFindOneInput, RoleWire} from './role-client.types';

@Injectable()
export class RoleClientService {
  constructor(@Inject(ROLE_SERVICE_NAME) private client: ClientProxy) {}

  findOneByID({id}: RoleFindOneInput): Promise<RoleWire> {
    const matchingRole$ = this.client.emit('findOneByID', {id});
    return lastValueFrom(matchingRole$);
  }
}
