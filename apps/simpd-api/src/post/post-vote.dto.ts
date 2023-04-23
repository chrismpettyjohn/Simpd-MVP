import {IsNumber} from 'class-validator';
import {PostVoteDTOWire} from '@simpd/types';

export class PostVoteDTO implements PostVoteDTOWire {
  @IsNumber()
  postChoiceID!: number;
}
