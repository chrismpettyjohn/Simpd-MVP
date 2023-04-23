import {IsEnum, IsString, IsOptional} from 'class-validator';
import {
  CreateTextPostDTOWire,
  PostType,
  UpdateTextPostDTOWire,
} from '@simpd/types';

export class CreateTextPostDTO implements CreateTextPostDTOWire {
  @IsEnum(PostType)
  type!: PostType.Text;

  @IsString()
  content!: string;
}

export class UpdateTextPostDTO implements UpdateTextPostDTOWire {
  @IsEnum(PostType)
  @IsOptional()
  type?: PostType.Text;

  @IsString()
  @IsOptional()
  content?: string;
}
