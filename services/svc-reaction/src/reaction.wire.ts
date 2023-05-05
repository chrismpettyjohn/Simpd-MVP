import {ReactionWire} from '@simpd/lib-client';
import {ReactionEntity} from './reaction.entity';

export function reactionEntityToReactionWire(
  reactionEntity: ReactionEntity
): ReactionWire {
  return {
    id: reactionEntity.id!,
    serviceKey: reactionEntity.serviceKey,
    resourceID: reactionEntity.resourceID,
    reaction: reactionEntity.reaction,
    profileID: reactionEntity.profileID,
  };
}
