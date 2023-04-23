import {IsEnum} from 'class-validator';
import {PostReactionDTOWire, PostReactionType} from '@simpd/types';

export class PostReactionDTO implements PostReactionDTOWire {
  @IsEnum(PostReactionType)
  reaction!: PostReactionType;
}
