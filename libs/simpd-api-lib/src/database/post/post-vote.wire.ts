import {PostVoteWire} from '@simpd/types';
import {PostVoteEntity} from './post-vote.entity';

export function postVoteWire(entity: PostVoteEntity): PostVoteWire {
  return {
    id: entity.id!,
    userID: entity.userID,
    choiceID: entity.postChoiceID,
    createdAt: entity.createdAt,
  };
}
