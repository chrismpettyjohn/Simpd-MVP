import {Injectable} from '@nestjs/common';
import {
  BaseReactionClientService,
  MessageReactionClientService,
  ReactionClientService,
  ReactionCreateOneInput,
  ReactionWire,
  SVC_MESSAGE_REACTION_NAME,
} from '@simpd/lib-client';

@Injectable()
export class MessageReactionService extends BaseReactionClientService {
  constructor(
    reactionClientService: ReactionClientService,
    private readonly messageReactionClientService: MessageReactionClientService
  ) {
    super(SVC_MESSAGE_REACTION_NAME, reactionClientService);
  }

  async createOne(
    input: Omit<ReactionCreateOneInput, 'serviceKey'>
  ): Promise<ReactionWire> {
    const newMessageReaction = await super.createOne(input);
    await this.messageReactionClientService._onCreated({
      messageReactionID: newMessageReaction.id!,
    });
    return newMessageReaction;
  }
}
