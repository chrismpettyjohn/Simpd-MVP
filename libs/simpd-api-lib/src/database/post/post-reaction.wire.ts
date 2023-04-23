import {PostReactionWire} from '@simpd/types';
import {PostReactionEntity} from './post-reaction.entity';

export function postReactionWire(entity: PostReactionEntity): PostReactionWire {
  return {
    id: entity.id!,
    postID: entity.postID,
    userID: entity.userID,
    reaction: entity.reaction,
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
  };
}
