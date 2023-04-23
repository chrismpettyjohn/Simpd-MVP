import {IsString, IsEmail} from 'class-validator';
import {CreateUserDTOWire} from '@simpd/types';

export class UserDTO implements CreateUserDTOWire {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}
