import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  ChatReactionFindManyInput,
  ChatReactionWire,
} from './chat-reaction-client.types';
import {
  SVC_CHAT_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_CHAT_REACTION_NAME,
} from './chat-reaction.const';

@Injectable()
export class ChatReactionClientService {
  constructor(@Inject(SVC_CHAT_REACTION_NAME) private client: ClientProxy) {}

  async findMany(
    filter: ChatReactionFindManyInput
  ): Promise<ChatReactionWire[]> {
    const matchingChatReactions$ = this.client.send(
      SVC_CHAT_REACTION_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingChatReactions$);
  }
}
