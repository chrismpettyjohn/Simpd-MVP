import {In} from 'typeorm';
import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ReactionRepository} from './reaction.repository';
import {reactionEntityToReactionWire} from './reaction.wire';
import {
  ReactionCreateOneInput,
  ReactionCreateOneResponse,
  ReactionFindManyInput,
  ReactionFindOneInput,
  ReactionWire,
  SVC_REACTION_INTERNAL_EVENT_CREATE_ONE,
  SVC_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_REACTION_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class ReactionController {
  constructor(private readonly reactionRepo: ReactionRepository) {}

  @MessagePattern(SVC_REACTION_INTERNAL_EVENT_CREATE_ONE)
  async reactionCreateOne(
    input: ReactionCreateOneInput
  ): Promise<ReactionCreateOneResponse> {
    try {
      const newReaction = await this.reactionRepo.create(input);
      const reaction = reactionEntityToReactionWire(newReaction);
      return {
        success: true,
        reaction,
      };
    } finally {
      return {
        success: false,
      };
    }
  }

  @MessagePattern(SVC_REACTION_INTERNAL_EVENT_FIND_ONE)
  async reactionFindOne(filter: ReactionFindOneInput): Promise<ReactionWire> {
    const matchingReaction = await this.reactionRepo.findOneOrFail({
      where: {
        id: filter.id,
      },
    });
    return reactionEntityToReactionWire(matchingReaction);
  }

  @MessagePattern(SVC_REACTION_INTERNAL_EVENT_FIND_MANY)
  async reactionFindMany(
    filter: ReactionFindManyInput
  ): Promise<ReactionWire[]> {
    const matchingReactions = await this.reactionRepo.find({
      where: {
        serviceKey: filter.serviceKey,
        id: filter.ids && In(filter.ids),
        resourceID: filter.resourceIDs && In(filter.resourceIDs),
      },
    });
    return matchingReactions.map(reactionEntityToReactionWire);
  }
}
