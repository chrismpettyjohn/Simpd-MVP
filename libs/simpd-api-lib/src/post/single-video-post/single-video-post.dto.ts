import {IsEnum, IsString, IsNumber, IsOptional} from 'class-validator';
import {
  CreateSingleVideoPostDTOWire,
  PostType,
  UpdateSingleVideoPostDTOWire,
} from '@simpd/types';

export class CreateSingleVideoPostDTO implements CreateSingleVideoPostDTOWire {
  @IsEnum(PostType)
  type!: PostType.SingleVideo;

  @IsString()
  content!: string;

  @IsNumber()
  mediaID!: number;
}

export class UpdateSingleVideoPostDTO implements UpdateSingleVideoPostDTOWire {
  @IsEnum(PostType)
  @IsOptional()
  type?: PostType.SingleVideo;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  mediaID?: number;
}
