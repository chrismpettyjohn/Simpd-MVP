import {Type} from 'class-transformer';
import {
  IsEnum,
  IsString,
  IsNumber,
  IsOptional,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import {
  CreateMediaAlbumPostDTOWire,
  MediaAlbumPostContentDTOWire,
  PostType,
  UpdateMediaAlbumPostDTOWire,
} from '@simpd/types';

export class MediaAlbumPostContentDTO implements MediaAlbumPostContentDTOWire {
  @IsNumber()
  mediaID!: number;

  @IsNumber()
  order!: number;
}

export class CreateMediaAlbumPostDTO implements CreateMediaAlbumPostDTOWire {
  @IsEnum(PostType)
  type!: PostType.MediaAlbum;

  @IsString()
  content!: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @Type(() => MediaAlbumPostContentDTO)
  @ValidateNested({each: true})
  media!: MediaAlbumPostContentDTOWire[];
}

export class UpdateMediaAlbumPostDTO implements UpdateMediaAlbumPostDTOWire {
  @IsEnum(PostType)
  @IsOptional()
  type?: PostType.MediaAlbum;

  @IsString()
  @IsOptional()
  content?: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @Type(() => MediaAlbumPostContentDTO)
  @ValidateNested({each: true})
  @IsOptional()
  media?: MediaAlbumPostContentDTOWire[];
}
