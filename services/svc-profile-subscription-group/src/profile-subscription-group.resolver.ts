import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {ProfileSubscriptionGroupModel} from './profile-subscription-group.model';
import {ProfileSubscriptionGroupService} from './profile-subscription-group.service';
import {subscriptionGroupWireToProfileSubscriptionGroupWire} from './profile-subscription-group.wire';
import {
  ProfileSubscriptionGroupWire,
  SubscriptionGroupModel,
} from '@simpd/lib-client';
import {
  ProfileSubscriptionGroupCreateInput,
  ProfileSubscriptionGroupFilterByManyInput,
  ProfileSubscriptionGroupFilterByOneInput,
} from './profile-subscription-group.input';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => ProfileSubscriptionGroupModel)
export class ProfileSubscriptionGroupResolver {
  constructor(
    private readonly profileSubscriptionGroupService: ProfileSubscriptionGroupService
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<ProfileSubscriptionGroupWire> {
    return this.profileSubscriptionGroup({profileID: reference.id});
  }

  @ResolveField(() => SubscriptionGroupModel)
  async subscriptionGroup(
    @Parent() parent: ProfileSubscriptionGroupModel
  ): Promise<SubscriptionGroupModel> {
    return {
      id: parent.id,
    };
  }

  @Query(() => ProfileSubscriptionGroupModel)
  async profileSubscriptionGroup(
    @Args('filter') filter: ProfileSubscriptionGroupFilterByOneInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const matchingSubscriptionGroup =
      await this.profileSubscriptionGroupService.findOne({
        resourceID: filter.profileID,
      });
    return subscriptionGroupWireToProfileSubscriptionGroupWire(
      matchingSubscriptionGroup
    );
  }

  @Query(() => [ProfileSubscriptionGroupModel])
  async profileSubscriptionGroups(
    @Args('filter', {
      type: () => ProfileSubscriptionGroupFilterByManyInput,
    })
    filter: ProfileSubscriptionGroupFilterByManyInput
  ): Promise<ProfileSubscriptionGroupWire[]> {
    const matchingSubscriptionGroups =
      await this.profileSubscriptionGroupService.findMany({
        resourceIDs: filter.profileIDs,
      });
    return matchingSubscriptionGroups.map(
      subscriptionGroupWireToProfileSubscriptionGroupWire
    );
  }

  @Mutation(() => ProfileSubscriptionGroupModel)
  @HasSession()
  async profileSubscriptionGroupCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: ProfileSubscriptionGroupCreateInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const newProfileSubscriptionGroup =
      await this.profileSubscriptionGroupService.createOne({
        name: input.name,
        description: input.description,
        monthlyCostInDollarsAndCents: input.monthlyCostInDollarsAndCents,
        resourceID: session.profileID,
      });

    return subscriptionGroupWireToProfileSubscriptionGroupWire(
      newProfileSubscriptionGroup
    );
  }

  @Mutation(() => Boolean)
  async profileSubscriptionGroupDelete(
    @Args('filter') filter: ProfileSubscriptionGroupFilterByOneInput
  ) {
    await this.profileSubscriptionGroupService.deleteOne({
      resourceID: filter.profileID,
    });
    return true;
  }
}
