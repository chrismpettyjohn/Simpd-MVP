import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {SESSION_SERVICE_NAME} from './session.const';
import {SessionFindOneInput, SessionWire} from './session-client.types';

@Injectable()
export class SessionClientService {
  constructor(@Inject(SESSION_SERVICE_NAME) private client: ClientProxy) {}

  async findOneByID({id}: SessionFindOneInput): Promise<SessionWire> {
    const matchingSession$ = this.client.send('sessionFindOneByID', {id});
    return await lastValueFrom(matchingSession$);
  }
}
