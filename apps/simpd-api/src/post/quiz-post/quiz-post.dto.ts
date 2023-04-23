import {Type} from 'class-transformer';
import {
  IsEnum,
  IsBoolean,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import {
  CreateQuizPostDTOWire,
  PostChoiceWithIndicatorDTOWire,
  PostType,
  UpdateQuizPostDTOWire,
} from '@simpd/types';

export class QuizPostChoiceDTO implements PostChoiceWithIndicatorDTOWire {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  value!: string;

  @IsString()
  label!: string;

  @IsNumber()
  order!: number;

  @IsBoolean()
  isCorrect!: boolean;
}

export class CreateQuizPostDTO implements CreateQuizPostDTOWire {
  @IsEnum(PostType)
  type!: PostType.Quiz;

  @IsString()
  content!: string;

  @IsArray()
  @ValidateNested({each: true})
  @ArrayMinSize(2)
  @Type(() => QuizPostChoiceDTO)
  choices!: QuizPostChoiceDTO[];
}

export class UpdateQuizPostDTO implements UpdateQuizPostDTOWire {
  @IsEnum(PostType)
  @IsOptional()
  type?: PostType.Quiz;

  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @ValidateNested({each: true})
  @ArrayMinSize(2)
  @Type(() => QuizPostChoiceDTO)
  choices?: QuizPostChoiceDTO[];
}
