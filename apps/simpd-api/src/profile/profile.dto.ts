import {UpdateProfileDTOWire} from '@simpd/types';
import {IsString, IsNumber, IsOptional} from 'class-validator';

export class UpdateProfileDTO implements UpdateProfileDTOWire {
  @IsString()
  @IsOptional()
  username!: string;

  @IsString()
  @IsOptional()
  displayName!: string;

  @IsString()
  @IsOptional()
  biography!: string;

  @IsString()
  @IsOptional()
  location!: string;

  @IsString()
  @IsOptional()
  websiteURL!: string;

  @IsNumber()
  @IsOptional()
  profilePictureID!: number;

  @IsNumber()
  @IsOptional()
  coverPictureID!: number;
}
