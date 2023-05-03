import {CommentWire} from '@simpd/lib-client';
import {CommentEntity} from './comment.entity';

export function commentEntityToCommentWire(
  commentEntity: CommentEntity
): CommentWire {
  return {
    id: commentEntity.id!,
    key: commentEntity.key,
    name: commentEntity.name,
    description: commentEntity.description,
  };
}
