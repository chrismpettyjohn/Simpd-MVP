import {In} from 'typeorm';
import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ReactionRepository} from './reaction.repository';
import {reactionEntityToReactionWire} from './reaction.wire';
import {
  ReactionCreateOneInput,
  ReactionCreateOneResponse,
  ReactionDeleteOneResponse,
  ReactionFindManyInput,
  ReactionFindOneInput,
  ReactionWire,
  SVC_REACTION_INTERNAL_EVENT_CREATE_ONE,
  SVC_REACTION_INTERNAL_EVENT_DELETE_ONE,
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
    const newReaction = await this.reactionRepo.create(input);
    const reaction = reactionEntityToReactionWire(newReaction);
    return {
      success: true,
      reaction,
    };
  }

  @MessagePattern(SVC_REACTION_INTERNAL_EVENT_FIND_ONE)
  async reactionFindOne(filter: ReactionFindOneInput): Promise<ReactionWire> {
    const matchingReaction = await this.reactionRepo.findOneOrFail({
      where: {
        id: filter.id,
        serviceKey: filter.serviceKey,
        resourceID: filter.resourceID,
        profileID: filter.profileID,
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
        profileID: filter.profileIDs && In(filter.profileIDs),
      },
    });
    return matchingReactions.map(reactionEntityToReactionWire);
  }

  @MessagePattern(SVC_REACTION_INTERNAL_EVENT_DELETE_ONE)
  async reactionDeleteOne(
    filter: ReactionFindOneInput
  ): Promise<ReactionDeleteOneResponse> {
    console.log(filter);
    await this.reactionRepo.softDelete({
      id: filter.id,
      serviceKey: filter.serviceKey,
      resourceID: filter.resourceID,
      profileID: filter.profileID,
    });
    return {
      success: true,
    };
  }
}
