import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {MessageReactionService} from './message-reaction.service';
import {
  MessageReactionFindManyInput,
  MessageReactionWire,
  SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY,
} from '@simpd/lib-client';
import {messageReactionWireToMessageReactionWire} from './message-reaction.wire';

@Controller()
export class MessageReactionController {
  constructor(
    private readonly messageReactionService: MessageReactionService
  ) {}

  @MessagePattern(SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY)
  async messageReactionFindMany(
    filter: MessageReactionFindManyInput
  ): Promise<MessageReactionWire[]> {
    const matchingReactions = await this.messageReactionService.findMany(
      filter
    );
    return matchingReactions.map(messageReactionWireToMessageReactionWire);
  }
}
