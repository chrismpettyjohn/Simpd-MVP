import { In } from 'typeorm';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { convertDollarsAndCentsToCents } from '@simpd/lib-api';
import { SubscriptionGroupRepository } from './subscription-group.repository';
import { subscriptionGroupEntityToSubscriptionGroupWire } from './subscription-group.wire';
import {
  SubscriptionGroupCreateOneInput,
  SubscriptionGroupFindManyInput,
  SubscriptionGroupFindOneInput,
  SubscriptionGroupWire,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_MANY,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class SubscriptionGroupController {
  constructor(
    private readonly subscriptionGroupRepo: SubscriptionGroupRepository
  ) { }

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE)
  async subscriptionGroupCreateOne(
    input: SubscriptionGroupCreateOneInput
  ): Promise<SubscriptionGroupWire> {
    const matchingSubscriptionGroup = await this.subscriptionGroupRepo.create({
      serviceKey: input.serviceKey,
      resourceID: input.resourceID,
      name: input.name,
      description: input.description,
      monthlyCostInCents: convertDollarsAndCentsToCents(
        input.monthlyCostInDollarsAndCents
      ),
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
          serviceKey: data.serviceKey,
          resourceID: data.resourceID,
        },
      });
    return subscriptionGroupEntityToSubscriptionGroupWire(
      matchingSubscriptionGroup
    );
  }

  @MessagePattern(SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_MANY)
  async subscriptionGroupFindMany(
    data: SubscriptionGroupFindManyInput
  ): Promise<SubscriptionGroupWire[]> {
    const matchingSubscriptionGroups = await this.subscriptionGroupRepo.find({
      where: {
        serviceKey: data.serviceKey,
        resourceID: In(data.resourceIDs),
      },
    });
    return matchingSubscriptionGroups.map(
      subscriptionGroupEntityToSubscriptionGroupWire
    );
  }
}
