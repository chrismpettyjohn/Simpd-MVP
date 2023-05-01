import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {SessionFindOneInput, SessionWire} from './session-client.types';
import {
  SESSION_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SESSION_SERVICE_NAME,
} from './session.const';

@Injectable()
export class SessionClientService {
  constructor(@Inject(SESSION_SERVICE_NAME) private client: ClientProxy) {}

  async findOneByID({id}: SessionFindOneInput): Promise<SessionWire> {
    const matchingSession$ = this.client.send(
      SESSION_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingSession$);
  }
}
