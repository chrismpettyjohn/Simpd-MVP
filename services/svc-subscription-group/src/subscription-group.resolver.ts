import {In} from 'typeorm';
import {SubscriptionGroupModel} from './subscription-group.model';
import {SubscriptionGroupEntity} from './subscription-group.entity';
import {HasSession} from '@simpd/lib-api';
import {SubscriptionGroupRepository} from './subscription-group.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  SubscriptionGroupCreateInput,
  SubscriptionGroupFilterByManyInput,
  SubscriptionGroupFilterByOneInput,
} from './subscription-group.input';

@Resolver(() => SubscriptionGroupModel)
export class SubscriptionGroupResolver {
  constructor(
    private readonly subscriptionGroupRepo: SubscriptionGroupRepository
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<SubscriptionGroupEntity> {
    return this.subscriptionGroup({id: reference.id});
  }

  @Query(() => SubscriptionGroupModel)
  async subscriptionGroup(
    @Args('filter') filter: SubscriptionGroupFilterByOneInput
  ): Promise<SubscriptionGroupEntity> {
    return this.subscriptionGroupRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [SubscriptionGroupModel])
  subscriptionGroups(
    @Args('filter', {
      type: () => SubscriptionGroupFilterByManyInput,
      nullable: true,
    })
    filter?: SubscriptionGroupFilterByManyInput
  ): Promise<SubscriptionGroupEntity[]> {
    return this.subscriptionGroupRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        key: filter?.keys && In(filter.keys),
      },
    });
  }

  @Mutation(() => SubscriptionGroupModel)
  @HasSession()
  async subscriptionGroupCreate(
    @Args('input') input: SubscriptionGroupCreateInput
  ): Promise<SubscriptionGroupEntity> {
    const newSubscriptionGroup = await this.subscriptionGroupRepo.create({
      key: input.key,
      name: input.name,
      description: input.description,
    });
    return newSubscriptionGroup;
  }

  @Mutation(() => Boolean)
  async subscriptionGroupDelete(
    @Args('filter') filter: SubscriptionGroupFilterByOneInput
  ) {
    await this.subscriptionGroupRepo.delete(filter);
    return true;
  }
}
