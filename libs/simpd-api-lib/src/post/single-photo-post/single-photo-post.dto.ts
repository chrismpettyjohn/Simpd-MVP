import {IsEnum, IsString, IsNumber, IsOptional} from 'class-validator';
import {
  CreateSinglePhotoPostDTOWire,
  PostType,
  UpdateSinglePhotoPostDTOWire,
} from '@simpd/types';

export class CreateSinglePhotoPostDTO implements CreateSinglePhotoPostDTOWire {
  @IsEnum(PostType)
  type!: PostType.SinglePhoto;

  @IsString()
  content!: string;

  @IsNumber()
  mediaID!: number;
}

export class UpdateSinglePhotoPostDTO implements UpdateSinglePhotoPostDTOWire {
  @IsEnum(PostType)
  @IsOptional()
  type?: PostType.SinglePhoto;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  mediaID?: number;
}
