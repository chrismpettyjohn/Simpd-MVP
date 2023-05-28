import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ChatReactionService} from './chat-reaction.service';
import {
  ChatReactionFindManyInput,
  ChatReactionWire,
  SVC_CHAT_REACTION_INTERNAL_EVENT_FIND_MANY,
} from '@simpd/lib-client';
import {chatReactionWireToChatReactionWire} from './chat-reaction.wire';

@Controller()
export class ChatReactionController {
  constructor(private readonly chatReactionService: ChatReactionService) {}

  @MessagePattern(SVC_CHAT_REACTION_INTERNAL_EVENT_FIND_MANY)
  async chatReactionFindMany(
    filter: ChatReactionFindManyInput
  ): Promise<ChatReactionWire[]> {
    const matchingReactions = await this.chatReactionService.findMany(filter);
    return matchingReactions.map(chatReactionWireToChatReactionWire);
  }
}
