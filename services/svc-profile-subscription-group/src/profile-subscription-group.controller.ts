import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ProfileSubscriptionGroupRepository} from './profile-subscription-group.repository';
import {subscriptionGroupEntityToProfileSubscriptionGroupWire} from './profile-subscription-group.wire';
import {
  ProfileSubscriptionGroupCreateOneInput,
  ProfileSubscriptionGroupFindOneInput,
  ProfileSubscriptionGroupWire,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class ProfileSubscriptionGroupController {
  constructor(
    private readonly subscriptionGroupRepo: ProfileSubscriptionGroupRepository
  ) {}

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE)
  async subscriptionGroupCreateOne(
    input: ProfileSubscriptionGroupCreateOneInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const matchingProfileSubscriptionGroup =
      await this.subscriptionGroupRepo.create({
        profileID: input.profileID,
        subscriptionGroupID: input.subscriptionGroupID,
      });
    return subscriptionGroupEntityToProfileSubscriptionGroupWire(
      matchingProfileSubscriptionGroup
    );
  }

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE)
  async subscriptionGroupFindOne(
    data: ProfileSubscriptionGroupFindOneInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const matchingProfileSubscriptionGroup =
      await this.subscriptionGroupRepo.findOneOrFail({
        where: {
          id: data.id,
        },
      });
    return subscriptionGroupEntityToProfileSubscriptionGroupWire(
      matchingProfileSubscriptionGroup
    );
  }
}
