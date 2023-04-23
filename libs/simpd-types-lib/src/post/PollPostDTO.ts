import {PostType} from './PostType';
import {PostChoiceDTOWire} from './PostChoiceDTO';

export interface CreatePollPostDTOWire {
  type: PostType.Poll;
  content: string;
  choices: PostChoiceDTOWire[];
}

export type UpdatePollPostDTOWire = Partial<CreatePollPostDTOWire>;
