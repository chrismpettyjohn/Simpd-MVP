import {In} from 'typeorm';
import {SubscriptionGroupModel} from './subscription-group.model';
import {SubscriptionGroupEntity} from './subscription-group.entity';
import {SubscriptionGroupRepository} from './subscription-group.repository';
import {
  SubscriptionGroupFilterByManyInput,
  SubscriptionGroupFilterByOneInput,
} from './subscription-group.input';
import {Args, Query, ResolveReference, Resolver} from '@nestjs/graphql';

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
      },
    });
  }
}
