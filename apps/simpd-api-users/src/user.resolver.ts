import {In} from 'typeorm';
import {UserModel} from './user.model';
import {UserEntity} from './user.entity';
import {HashService} from '@simpd/api-lib';
import {UserRepository} from './user.repository';
import {DEFAULT_USER_ROLE_ID} from './user.const';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {
  UserCreateInput,
  UserFilterByManyInput,
  UserFilterByOneInput,
  UserUpdateInput,
} from './user.input';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService
  ) {}

  @Query(() => UserModel)
  async user(
    @Args('filter') filter: UserFilterByOneInput
  ): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [UserModel])
  users(
    @Args('filter', {type: () => UserFilterByManyInput, nullable: true})
    filter?: UserFilterByManyInput
  ): Promise<UserEntity[]> {
    return this.userRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        email: filter?.emails && In(filter.emails),
      },
    });
  }

  @Mutation(() => UserModel)
  async userCreate(@Args('input') input: UserCreateInput): Promise<UserEntity> {
    const newUser = await this.userRepo.create({
      roleID: DEFAULT_USER_ROLE_ID,
      email: input.email,
      hashedPassword: this.hashService.generate(input.password),
    });
    return newUser;
  }

  @Mutation(() => Boolean)
  async userUpdate(
    @Args('filter') filter: UserFilterByOneInput,
    @Args('input') input: UserUpdateInput
  ): Promise<UserEntity> {
    await this.userRepo.update(filter, input);
    return this.user(filter);
  }

  @Mutation(() => Boolean)
  async userDelete(@Args('filter') filter: UserFilterByOneInput) {
    await this.userRepo.delete(filter);
    return true;
  }
}
