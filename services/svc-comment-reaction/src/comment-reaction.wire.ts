import {ReactionWire} from '@simpd/lib-client';
import {CommentReactionModel} from './comment-reaction.model';

export function commentReactionWireToCommentReactionWire(
  reaction: ReactionWire
): CommentReactionModel {
  return {
    id: reaction.id,
    commentID: reaction.resourceID,
    profileID: reaction.profileID,
    reaction: reaction.reaction,
  };
}
