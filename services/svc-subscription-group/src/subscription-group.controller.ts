import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {SubscriptionGroupRepository} from './subscription-group.repository';
import {subscriptionGroupEntityToSubscriptionGroupWire} from './subscription-group.wire';
import {
  SubscriptionGroupFindOneInput,
  SubscriptionGroupWire,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class SubscriptionGroupController {
  constructor(
    private readonly subscriptionGroupRepo: SubscriptionGroupRepository
  ) {}

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE)
  async subscriptionGroupFindOneByID(
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
