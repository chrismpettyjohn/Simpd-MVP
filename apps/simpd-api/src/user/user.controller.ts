import {UserDTO} from './user.dto';
import {ErrorCode, PrivateUserWire} from '@simpd/types';
import {privateUserWire} from '../database/user/user.wire';
import {UserRepository} from '../database/user/user.repository';
import {BadRequestException, Body, Controller, Post} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @Post()
  async createUser(@Body() userDTO: UserDTO): Promise<PrivateUserWire> {
    const existingUserByEmail = await this.userRepo.findOne({
      email: userDTO.email,
    });

    if (existingUserByEmail) {
      throw new BadRequestException(ErrorCode.UserCreationEmailIsTaken);
    }

    const newUser = await this.userRepo.create({
      email: userDTO.email,
      hashedPassword: userDTO.password,
      roleID: 1,
    });

    return privateUserWire(newUser);
  }
}
