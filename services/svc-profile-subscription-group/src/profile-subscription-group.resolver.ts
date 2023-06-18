import {In} from 'typeorm';
import {UnauthorizedException} from '@nestjs/common';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {ProfileSubscriptionGroupModel} from './profile-subscription-group.model';
import {ProfileSubscriptionGroupEntity} from './profile-subscription-group.entity';
import {ProfileSubscriptionGroupRepository} from './profile-subscription-group.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  ProfileSubscriptionGroupCreateInput,
  ProfileSubscriptionGroupFilterByManyInput,
  ProfileSubscriptionGroupFilterByOneInput,
} from './profile-subscription-group.input';
import {
  ProfileClientService,
  SubscriptionGroupClientService,
} from '@simpd/lib-client';

@Resolver(() => ProfileSubscriptionGroupModel)
export class ProfileSubscriptionGroupResolver {
  constructor(
    private readonly profileClientService: ProfileClientService,
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
    const matchingProfile = await this.profileClientService.findOne({
      id: input.profileID,
    });

    const userOwnsProfile = matchingProfile.userID === session.userID;

    if (!userOwnsProfile) {
      throw new UnauthorizedException();
    }

    const newSubscriptionGroup =
      await this.subscriptionGroupClientService.createOne({
        name: input.name,
        description: input.description,
        monthlyCost: input.monthlyCost,
      });

    const newProfileSubscriptionGroup = await this.subscriptionGroupRepo.create(
      {
        profileID: input.profileID,
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
