import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  MessageFindOneInput,
  MessageWasCreatedInternalMessage,
  MessageWire,
} from './message-client.types';
import {
  INTERNAL_MESSAGE_SVC_MESSAGE_WAS_CREATED,
  SVC_MESSAGE_INTERNAL_EVENT_FIND_ONE,
  SVC_MESSAGE_NAME,
} from './message.const';

@Injectable()
export class MessageClientService {
  constructor(@Inject(SVC_MESSAGE_NAME) private client: ClientProxy) {}

  async findOne(input: MessageFindOneInput): Promise<MessageWire> {
    const matchingMessage$ = this.client.send(
      SVC_MESSAGE_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingMessage$);
  }

  async _onCreated(input: MessageWasCreatedInternalMessage): Promise<void> {
    await this.client.send(INTERNAL_MESSAGE_SVC_MESSAGE_WAS_CREATED, input);
  }
}
