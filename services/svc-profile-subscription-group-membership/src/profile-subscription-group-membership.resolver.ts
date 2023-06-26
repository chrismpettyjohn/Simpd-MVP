import {In} from 'typeorm';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {ProfileSubscriptionGroupMembershipModel} from './profile-subscription-group-membership.model';
import {ProfileSubscriptionGroupMembershipRepository} from './profile-subscription-group-membership.repository';
import {subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire} from './profile-subscription-group-membership.wire';
import {ProfileSubscriptionGroupMembershipWire} from '@simpd/lib-client';
import {
  ProfileSubscriptionGroupMembershipFilterByManyInput,
  ProfileSubscriptionGroupMembershipFilterByOneInput,
} from './profile-subscription-group-membership.input';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

@Resolver(() => ProfileSubscriptionGroupMembershipModel)
export class ProfileSubscriptionGroupMembershipResolver {
  constructor(
    private readonly subscriptionGroupMembershipMembershipRepo: ProfileSubscriptionGroupMembershipRepository
  ) {}

  @Query(() => ProfileSubscriptionGroupMembershipModel)
  @HasSession()
  async subscriptionGroupMembership(
    @GetSession() session: SessionContents,
    @Args('filter') filter: ProfileSubscriptionGroupMembershipFilterByOneInput
  ): Promise<ProfileSubscriptionGroupMembershipWire> {
    const matchingSubscriptionGroup =
      await this.subscriptionGroupMembershipMembershipRepo.findOneOrFail({
        where: {
          profileID: session.profileID,
          subscriptionGroupID: filter.subscriptionGroupID,
        },
      });
    return subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire(
      matchingSubscriptionGroup
    );
  }

  @Query(() => [ProfileSubscriptionGroupMembershipModel])
  @HasSession()
  async subscriptionGroupMemberships(
    @GetSession() session: SessionContents,
    @Args('filter', {
      type: () => ProfileSubscriptionGroupMembershipFilterByManyInput,
    })
    filter: ProfileSubscriptionGroupMembershipFilterByManyInput
  ): Promise<ProfileSubscriptionGroupMembershipWire[]> {
    const matchingSubscriptionGroups =
      await this.subscriptionGroupMembershipMembershipRepo.find({
        where: {
          profileID: session.profileID,
          subscriptionGroupID:
            filter.subscriptionGroupIDs && In(filter.subscriptionGroupIDs),
        },
      });
    return matchingSubscriptionGroups.map(
      subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire
    );
  }

  @Mutation(() => Boolean)
  @HasSession()
  async subscriptionGroupMembershipDelete(
    @GetSession() session: SessionContents,
    @Args('filter') filter: ProfileSubscriptionGroupMembershipFilterByOneInput
  ) {
    await this.subscriptionGroupMembershipMembershipRepo.softDelete({
      profileID: session.profileID,
      subscriptionGroupID: filter.subscriptionGroupID,
    });
    return true;
  }
}
