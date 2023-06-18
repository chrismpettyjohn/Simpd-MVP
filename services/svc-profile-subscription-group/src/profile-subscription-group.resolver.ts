import {In} from 'typeorm';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {ProfileSubscriptionGroupModel} from './profile-subscription-group.model';
import {ProfileSubscriptionGroupEntity} from './profile-subscription-group.entity';
import {ProfileSubscriptionGroupRepository} from './profile-subscription-group.repository';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  ProfileSubscriptionGroupCreateInput,
  ProfileSubscriptionGroupFilterByManyInput,
  ProfileSubscriptionGroupFilterByOneInput,
} from './profile-subscription-group.input';
import {
  SubscriptionGroupClientService,
  SubscriptionGroupModel,
} from '@simpd/lib-client';

@Resolver(() => ProfileSubscriptionGroupModel)
export class ProfileSubscriptionGroupResolver {
  constructor(
    private readonly subscriptionGroupRepo: ProfileSubscriptionGroupRepository,
    private readonly subscriptionGroupClientService: SubscriptionGroupClientService
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<ProfileSubscriptionGroupEntity> {
    return this.subscriptionGroupRepo.findOneOrFail({
      where: {
        id: reference.id,
      },
    });
  }

  @ResolveField(() => SubscriptionGroupModel)
  subscriptionGroup(
    @Parent() parent: ProfileSubscriptionGroupEntity
  ): SubscriptionGroupModel {
    return {
      id: parent.subscriptionGroupID,
    };
  }

  @Query(() => ProfileSubscriptionGroupModel)
  async profileSubscriptionGroup(
    @Args('filter') filter: ProfileSubscriptionGroupFilterByOneInput
  ): Promise<ProfileSubscriptionGroupEntity> {
    return this.subscriptionGroupRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [ProfileSubscriptionGroupModel])
  profileSubscriptionGroups(
    @Args('filter', {
      type: () => ProfileSubscriptionGroupFilterByManyInput,
      nullable: true,
    })
    filter?: ProfileSubscriptionGroupFilterByManyInput
  ): Promise<ProfileSubscriptionGroupEntity[]> {
    return this.subscriptionGroupRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });
  }

  @Mutation(() => ProfileSubscriptionGroupModel)
  @HasSession()
  async profileSubscriptionGroupCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: ProfileSubscriptionGroupCreateInput
  ): Promise<ProfileSubscriptionGroupEntity> {
    const newSubscriptionGroup =
      await this.subscriptionGroupClientService.createOne({
        name: input.name,
        description: input.description,
        monthlyCostInDollarsAndCents: input.monthlyCostInDollarsAndCents,
      });

    const newProfileSubscriptionGroup = await this.subscriptionGroupRepo.create(
      {
        profileID: session.profileID,
        subscriptionGroupID: newSubscriptionGroup.id,
      }
    );

    return newProfileSubscriptionGroup;
  }

  @Mutation(() => Boolean)
  async profileSubscriptionGroupDelete(
    @Args('filter') filter: ProfileSubscriptionGroupFilterByOneInput
  ) {
    await this.subscriptionGroupRepo.softDelete(filter);
    return true;
  }
}
