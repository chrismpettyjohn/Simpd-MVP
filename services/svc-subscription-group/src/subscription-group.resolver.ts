import {In} from 'typeorm';
import {SubscriptionGroupWire} from '@simpd/lib-client';
import {SubscriptionGroupModel} from './subscription-group.model';
import {SubscriptionGroupEntity} from './subscription-group.entity';
import {Args, Query, ResolveReference, Resolver} from '@nestjs/graphql';
import {SubscriptionGroupRepository} from './subscription-group.repository';
import {subscriptionGroupEntityToSubscriptionGroupWire} from './subscription-group.wire';
import {
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
  ): Promise<SubscriptionGroupWire> {
    const matchingSubscriptionGroup =
      await this.subscriptionGroupRepo.findOneOrFail({
        where: filter,
      });
    return subscriptionGroupEntityToSubscriptionGroupWire(
      matchingSubscriptionGroup
    );
  }

  @Query(() => [SubscriptionGroupModel])
  async subscriptionGroups(
    @Args('filter', {
      type: () => SubscriptionGroupFilterByManyInput,
      nullable: true,
    })
    filter?: SubscriptionGroupFilterByManyInput
  ): Promise<SubscriptionGroupWire[]> {
    const matchingSubscriptionGroups = await this.subscriptionGroupRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
    return matchingSubscriptionGroups.map(
      subscriptionGroupEntityToSubscriptionGroupWire
    );
  }
}
