import {ReactionWire} from '@simpd/lib-client';
import {PostReactionModel} from './post-reaction.model';

export function reactionWireToPostReactionWire(
  reaction: ReactionWire
): PostReactionModel {
  return {
    id: reaction.id,
    postID: reaction.resourceID,
    profileID: reaction.profileID,
    reaction: reaction.reaction,
  };
}
