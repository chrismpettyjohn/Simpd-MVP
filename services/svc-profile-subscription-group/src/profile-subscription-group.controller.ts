import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ProfileSubscriptionGroupService} from './profile-subscription-group.service';
import {subscriptionGroupWireToProfileSubscriptionGroupWire} from './profile-subscription-group.wire';
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
    private readonly profileSubscriptionGroupService: ProfileSubscriptionGroupService
  ) {}

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE)
  async subscriptionGroupCreateOne(
    input: ProfileSubscriptionGroupCreateOneInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const matchingProfileSubscriptionGroup =
      await this.profileSubscriptionGroupService.createOne({
        resourceID: input.profileID,
        name: input.name,
        description: input.description,
        monthlyCostInDollarsAndCents: input.monthlyCostInDollarsAndCents,
      });
    return subscriptionGroupWireToProfileSubscriptionGroupWire(
      matchingProfileSubscriptionGroup
    );
  }

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE)
  async subscriptionGroupFindOne(
    data: ProfileSubscriptionGroupFindOneInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const matchingProfileSubscriptionGroup =
      await this.profileSubscriptionGroupService.findOne({
        resourceID: data.profileID,
      });
    return subscriptionGroupWireToProfileSubscriptionGroupWire(
      matchingProfileSubscriptionGroup
    );
  }
}
