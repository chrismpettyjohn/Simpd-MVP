import {PostWire} from './Post';
import {PostType} from './PostType';
import {PostVoteWire} from './PostVote';
import {PostChoiceWire} from './PostChoice';

export interface QuizPostWire extends PostWire {
  type: PostType.Quiz;
  content: string;
  choices: PostChoiceWire[];
  votes: PostVoteWire[];
}
