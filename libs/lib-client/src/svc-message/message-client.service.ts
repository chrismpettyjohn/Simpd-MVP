import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {MessageFindOneInput, MessageWire} from './message-client.types';
import {
  SVC_MESSAGE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_MESSAGE_NAME,
} from './message.const';

@Injectable()
export class MessageClientService {
  constructor(@Inject(SVC_MESSAGE_NAME) private client: ClientProxy) {}

  async findOneByID({id}: MessageFindOneInput): Promise<MessageWire> {
    const matchingMessage$ = this.client.send(
      SVC_MESSAGE_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingMessage$);
  }
}