import {CommentWire, PostCommentWire} from '@simpd/lib-client';

export function commentWireToPostCommentWire(
  comment: CommentWire
): PostCommentWire {
  return {
    id: comment.id,
    postID: comment.resourceID,
    profileID: comment.profileID,
    content: comment.content,
  };
}
