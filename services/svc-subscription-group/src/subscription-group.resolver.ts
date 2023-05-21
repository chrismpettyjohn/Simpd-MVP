import {In} from 'typeorm';
import {UnauthorizedException} from '@nestjs/common';
import {SubscriptionGroupModel} from './subscription-group.model';
import {SubscriptionGroupEntity} from './subscription-group.entity';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
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
import {ProfileClientService} from '@simpd/lib-client';

@Resolver(() => SubscriptionGroupModel)
export class SubscriptionGroupResolver {
  constructor(
    private readonly subscriptionGroupRepo: SubscriptionGroupRepository,
    private readonly profileClientService: ProfileClientService
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<SubscriptionGroupEntity> {
    return this.subscriptionGroupRepo.findOneOrFail({
      where: {
        id: reference.id,
      },
    });
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
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });
  }

  @Mutation(() => SubscriptionGroupModel)
  @HasSession()
  async subscriptionGroupCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: SubscriptionGroupCreateInput
  ): Promise<SubscriptionGroupEntity> {
    const matchingProfile = await this.profileClientService.findOne({
      id: input.profileID,
    });

    const userOwnsProfile = matchingProfile.userID === session.userID;

    if (!userOwnsProfile) {
      throw new UnauthorizedException();
    }

    const newSubscriptionGroup = await this.subscriptionGroupRepo.create({
      profileID: input.profileID,
      name: input.name,
      description: input.description,
    });
    return newSubscriptionGroup;
  }

  @Mutation(() => Boolean)
  async subscriptionGroupDelete(
    @Args('filter') filter: SubscriptionGroupFilterByOneInput
  ) {
    await this.subscriptionGroupRepo.softDelete(filter);
    return true;
  }
}
