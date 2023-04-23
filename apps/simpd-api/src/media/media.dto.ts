import {IsString, IsOptional} from 'class-validator';
import {CreateMediaDTOWire, UpdateMediaDTOWire} from '@simpd/types';

export class CreateMediaDTO implements CreateMediaDTOWire {
  @IsString()
  fileLabel!: string;

  @IsString()
  fileDesc!: string;
}

export class UpdateMediaDTO implements UpdateMediaDTOWire {
  @IsString()
  @IsOptional()
  fileLabel?: string;

  @IsString()
  @IsOptional()
  fileDesc?: string;
}
