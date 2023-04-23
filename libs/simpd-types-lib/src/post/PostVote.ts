import {Timestamp} from '@simpd/types';

export interface PostVoteWire {
  id: number;
  userID: number;
  choiceID: number;
  createdAt: Timestamp;
}

export const examplePostVoteWire: PostVoteWire = {
  id: 1,
  userID: 1,
  choiceID: 1,
  createdAt: '',
};
