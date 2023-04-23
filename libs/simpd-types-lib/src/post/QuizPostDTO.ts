import {PostType} from './PostType';
import {PostChoiceWithIndicatorDTOWire} from './PostChoiceDTO';

export interface CreateQuizPostDTOWire {
  type: PostType.Quiz;
  content: string;
  choices: PostChoiceWithIndicatorDTOWire[];
}

export type UpdateQuizPostDTOWire = Partial<CreateQuizPostDTOWire>;

export interface QuizPostReactionDTOWire {
  choiceID: number;
}
