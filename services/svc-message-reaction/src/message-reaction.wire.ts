import {ReactionWire} from '@simpd/lib-client';
import {MessageReactionModel} from './message-reaction.model';

export function messageReactionWireToMessageReactionWire(
  reaction: ReactionWire
): MessageReactionModel {
  return {
    id: reaction.id,
    messageID: reaction.resourceID,
    profileID: reaction.profileID,
    reaction: reaction.reaction,
  };
}
