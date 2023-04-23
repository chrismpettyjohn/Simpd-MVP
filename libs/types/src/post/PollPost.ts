import {PostWire} from './Post';
import {PostType} from './PostType';
import {PostVoteWire} from './PostVote';
import {PostChoiceWire} from './PostChoice';

export interface PollPostWire extends PostWire {
  type: PostType.Poll;
  content: string;
  choices: PostChoiceWire[];
  votes: PostVoteWire[];
}
