import {ReactionWire} from '@simpd/lib-client';
import {ChatReactionModel} from './chat-reaction.model';

export function chatReactionWireToChatReactionWire(
  reaction: ReactionWire
): ChatReactionModel {
  return {
    id: reaction.id,
    chatID: reaction.resourceID,
    profileID: reaction.profileID,
    reaction: reaction.reaction,
  };
}
