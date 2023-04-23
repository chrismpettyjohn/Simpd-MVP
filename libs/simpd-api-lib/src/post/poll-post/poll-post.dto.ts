import {Type} from 'class-transformer';
import {
  IsEnum,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import {
  CreatePollPostDTOWire,
  PostChoiceDTOWire,
  PostType,
  UpdatePollPostDTOWire,
} from '@simpd/types';

export class PollPostChoiceDTO implements PostChoiceDTOWire {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  value!: string;

  @IsString()
  label!: string;

  @IsNumber()
  order!: number;
}

export class CreatePollPostDTO implements CreatePollPostDTOWire {
  @IsEnum(PostType)
  type!: PostType.Poll;

  @IsString()
  content!: string;

  @IsArray()
  @ValidateNested({each: true})
  @ArrayMinSize(2)
  @Type(() => PollPostChoiceDTO)
  choices!: PollPostChoiceDTO[];
}

export class UpdatePollPostDTO implements UpdatePollPostDTOWire {
  @IsEnum(PostType)
  @IsOptional()
  type?: PostType.Poll;

  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @ValidateNested({each: true})
  @ArrayMinSize(2)
  @Type(() => PollPostChoiceDTO)
  choices?: PollPostChoiceDTO[];
}
