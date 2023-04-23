import {In} from 'typeorm';
import {UserModel} from './user.model';
import {UserEntity} from './user.entity';
import {HashService} from '@simpd/api-lib';
import {UserRepository} from './user.repository';
import {DEFAULT_USER_ROLE_ID} from './user.const';
import {UserCreateInput, UserFilterInput, UserUpdateInput} from './user.input';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService
  ) {}

  @Query(() => UserModel)
  async user(@Args('id') id: number): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: {
        id,
      },
    });
  }

  @Query(() => [UserModel])
  users(
    @Args('filter', {type: () => UserFilterInput}) filter: UserFilterInput
  ): Promise<UserEntity[]> {
    return this.userRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        email: filter.emails && In(filter.emails),
      },
    });
  }

  @Mutation(() => UserModel)
  async userCreate(
    @Args('newUser') userCreateInput: UserCreateInput
  ): Promise<UserEntity> {
    const newUser = await this.userRepo.create({
      roleID: DEFAULT_USER_ROLE_ID,
      email: userCreateInput.email,
      hashedPassword: this.hashService.generate(userCreateInput.password),
    });
    return newUser;
  }

  @Mutation(() => Boolean)
  async userUpdate(
    @Args('id') id: number,
    @Args('userChanges') userChanges: UserUpdateInput
  ): Promise<UserEntity> {
    await this.userRepo.update({id}, userChanges);
    return this.user(id);
  }

  @Mutation(() => Boolean)
  async userDelete(@Args('id') id: number) {
    await this.userRepo.delete({id});
    return true;
  }
}
