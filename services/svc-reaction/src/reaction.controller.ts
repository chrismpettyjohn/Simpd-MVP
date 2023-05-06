import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ReactionRepository } from './reaction.repository';
import { reactionEntityToReactionWire } from './reaction.wire';
import {
  ReactionFindOneInput,
  ReactionWire,
  SVC_REACTION_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class ReactionController {
  constructor(private readonly reactionRepo: ReactionRepository) { }

  @MessagePattern(SVC_REACTION_INTERNAL_EVENT_FIND_ONE)
  async reactionFindOneByID(data: ReactionFindOneInput): Promise<ReactionWire> {
    const matchingRole = await this.reactionRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return reactionEntityToReactionWire(matchingRole);
  }
}
