import {CommentWire} from '@simpd/lib-client';
import {PostCommentModel} from './post-comment.model';

export function commentWireToPostCommentWire(
  comment: CommentWire
): PostCommentModel {
  return {
    id: comment.id,
    postID: comment.resourceID,
    profileID: comment.profileID,
    content: comment.content,
  };
}
