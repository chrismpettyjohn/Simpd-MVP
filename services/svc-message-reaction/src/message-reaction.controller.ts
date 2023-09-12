import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {MessageReactionService} from './message-reaction.service';
import {messageReactionWireToMessageReactionWire} from './message-reaction.wire';
import {
  MessageReactionFindManyInput,
  MessageReactionFindOneInput,
  MessageReactionWire,
  SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

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

  @MessagePattern(SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_ONE)
  async messageReactionFindOne(
    filter: MessageReactionFindOneInput
  ): Promise<MessageReactionWire> {
    const matchingReaction = await this.messageReactionService.findOne(filter);
    return messageReactionWireToMessageReactionWire(matchingReaction);
  }
}
