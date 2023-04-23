import { UserEntity } from './user.entity';
import { UserCreateInput } from './user.input';
import { UserModel } from './user.model';
import {
  Args,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly userRepo: UserRepository,
  ) { }

  @Query(() => UserModel)
  async user(@Args('id') id: number): Promise<UserEntity> {
    return this.userDataloaderService.loadById(id);
  }

  @Query(() => [UserModel])
  users(@Args() userArgs: UserArgs): Promise<UserEntity[]> {
    return this.userRepo.find(omit(userArgs, 'other'), userArgs.other);
  }

  @Mutation(() => UserModel)
  async userCreate(
    @Args('newUser') userCreateInput: UserCreateInput
  ): Promise<UserEntity> {
    const newUser = await this.userRepo.create({ ...userCreateInput });
    return newUser;
  }

  @Mutation(() => Boolean)
  async userUpdate(
    @Args('id') id: number,
    @Args('userChanges') userChanges: UserUpdateInput
  ) {
    await this.userRepo.update({ id }, userChanges);
    await this.userDataloaderService.clearByID(id);
    return true;
  }

  @Mutation(() => Boolean)
  async userDelete(@Args('id') id: number) {
    const deletedUser = await this.userRepo.findOneOrFail({ id });
    pubSub.publish('userDeleted', { userDeleted: deletedUser });
    await this.userRepo.delete({ id });
    await this.userDataloaderService.clearByID(id);
    return true;
  }
}
