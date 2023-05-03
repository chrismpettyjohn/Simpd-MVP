import {IsNumber} from 'class-validator';
import {MediaCreateInput} from './media.input';

export class MediaCreateDTO implements MediaCreateInput {
  @IsNumber()
  profileID!: number;
}
