import {In} from 'typeorm';
import {RoleModel} from './role.model';
import {RoleEntity} from './role.entity';
import {RoleRepository} from './role.repository';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {
  RoleCreateInput,
  RoleFilterByManyInput,
  RoleFilterByOneInput,
  RoleUpdateInput,
} from './role.input';

@Resolver(() => RoleModel)
export class RoleResolver {
  constructor(private readonly roleRepo: RoleRepository) {}

  @Query(() => RoleModel)
  async role(
    @Args('filter') filter: RoleFilterByOneInput
  ): Promise<RoleEntity> {
    return this.roleRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [RoleModel])
  roles(
    @Args('filter', {type: () => RoleFilterByManyInput, nullable: true})
    filter?: RoleFilterByManyInput
  ): Promise<RoleEntity[]> {
    return this.roleRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
  }

  @Mutation(() => RoleModel)
  async roleCreate(@Args('input') input: RoleCreateInput): Promise<RoleEntity> {
    const newRole = await this.roleRepo.create({
      name: input.name,
      description: input.description,
    });
    return newRole;
  }

  @Mutation(() => Boolean)
  async roleUpdate(
    @Args('filter') filter: RoleFilterByOneInput,
    @Args('input') input: RoleUpdateInput
  ): Promise<RoleEntity> {
    await this.roleRepo.update(filter, input);
    return this.role(filter);
  }

  @Mutation(() => Boolean)
  async roleDelete(@Args('filter') filter: RoleFilterByOneInput) {
    await this.roleRepo.delete(filter);
    return true;
  }
}
