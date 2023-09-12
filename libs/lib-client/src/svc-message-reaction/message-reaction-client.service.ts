import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  MessageReactionFindManyInput,
  MessageReactionFindOneInput,
  MessageReactionWasCreatedInternalMessage,
  MessageReactionWire,
} from './message-reaction-client.types';
import {
  INTERNAL_MESSAGE_SVC_MESSAGE_REACTION_WAS_CREATED,
  SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_ONE,
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
  async findOne(
    filter: MessageReactionFindOneInput
  ): Promise<MessageReactionWire> {
    const matchingMessageReaction$ = this.client.send(
      SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingMessageReaction$);
  }

  async _onCreated(
    input: MessageReactionWasCreatedInternalMessage
  ): Promise<void> {
    await this.client.send(
      INTERNAL_MESSAGE_SVC_MESSAGE_REACTION_WAS_CREATED,
      input
    );
  }
}
