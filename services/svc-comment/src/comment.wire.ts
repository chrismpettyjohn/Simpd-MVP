import {CommentWire} from '@simpd/lib-client';
import {CommentEntity} from './comment.entity';

export function commentEntityToCommentWire(
  commentEntity: CommentEntity
): CommentWire {
  return {
    id: commentEntity.id!,
    serviceKey: commentEntity.serviceKey,
    resourceID: commentEntity.resourceID,
    content: commentEntity.content,
    profileID: commentEntity.profileID,
  };
}
