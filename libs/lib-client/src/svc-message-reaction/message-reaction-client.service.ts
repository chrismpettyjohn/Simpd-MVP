import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  MessageReactionFindManyInput,
  MessageReactionWire,
} from './message-reaction-client.types';
import {
  SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_MESSAGE_REACTION_NAME,
} from './message-reaction.const';

@Injectable()
export class MessageReactionClientService {
  constructor(@Inject(SVC_MESSAGE_REACTION_NAME) private client: ClientProxy) {}

  async findMany(
    filter: MessageReactionFindManyInput
  ): Promise<MessageReactionWire[]> {
    const matchingMessageReactions$ = this.client.send(
      SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingMessageReactions$);
  }
}
