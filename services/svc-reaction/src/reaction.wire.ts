import {ReactionWire} from '@simpd/lib-client';
import {ReactionEntity} from './reaction.entity';

export function reactionEntityToReactionWire(
  reactionEntity: ReactionEntity
): ReactionWire {
  return {
    id: reactionEntity.id!,
  };
}
