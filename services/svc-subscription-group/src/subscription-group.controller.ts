import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {SubscriptionGroupRepository} from './subscription-group.repository';
import {subscriptionGroupEntityToSubscriptionGroupWire} from './subscription-group.wire';
import {
  SubscriptionGroupCreateOneInput,
  SubscriptionGroupFindOneInput,
  SubscriptionGroupWire,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class SubscriptionGroupController {
  constructor(
    private readonly subscriptionGroupRepo: SubscriptionGroupRepository
  ) {}

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE)
  async subscriptionGroupCreateOne(
    input: SubscriptionGroupCreateOneInput
  ): Promise<SubscriptionGroupWire> {
    const matchingSubscriptionGroup = await this.subscriptionGroupRepo.create({
      name: input.name,
      description: input.description,
      monthlyCost: input.monthlyCost,
    });
    return subscriptionGroupEntityToSubscriptionGroupWire(
      matchingSubscriptionGroup
    );
  }

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE)
  async subscriptionGroupFindOne(
    data: SubscriptionGroupFindOneInput
  ): Promise<SubscriptionGroupWire> {
    const matchingSubscriptionGroup =
      await this.subscriptionGroupRepo.findOneOrFail({
        where: {
          id: data.id,
        },
      });
    return subscriptionGroupEntityToSubscriptionGroupWire(
      matchingSubscriptionGroup
    );
  }
}
