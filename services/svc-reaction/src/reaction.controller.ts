import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ReactionRepository} from './reaction.repository';
import {reactionEntityToReactionWire} from './reaction.wire';
import {
  ReactionFindOneInput,
  ReactionWire,
  SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class ReactionController {
  constructor(private readonly reactionRepo: ReactionRepository) {}

  @MessagePattern(SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async reactionFindOneByID(data: ReactionFindOneInput): Promise<ReactionWire> {
    const matchingRole = await this.reactionRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return reactionEntityToReactionWire(matchingRole);
  }
}
