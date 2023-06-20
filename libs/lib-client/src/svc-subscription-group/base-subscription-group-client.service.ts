import {SubscriptionGroupClientService} from './subscription-group-client.service';
import {
  SubscriptionGroupCreateOneInput,
  SubscriptionGroupFindManyInput,
  SubscriptionGroupFindOneInput,
  SubscriptionGroupWire,
} from './subscription-group-client.types';

export class BaseSubscriptionGroupClientService {
  constructor(
    private readonly serviceKey: string,
    private readonly subscriptionGroupClientService: SubscriptionGroupClientService
  ) {}

  async createOne(
    input: Omit<SubscriptionGroupCreateOneInput, 'serviceKey'>
  ): Promise<SubscriptionGroupWire> {
    return await this.subscriptionGroupClientService.createOne({
      ...input,
      serviceKey: this.serviceKey,
    });
  }

  async findOne(
    filter: Omit<SubscriptionGroupFindOneInput, 'serviceKey'>
  ): Promise<SubscriptionGroupWire> {
    return await this.subscriptionGroupClientService.findOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async findMany(
    filter: Omit<SubscriptionGroupFindManyInput, 'serviceKey'>
  ): Promise<SubscriptionGroupWire[]> {
    return await this.subscriptionGroupClientService.findMany({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async deleteOne(
    filter: Omit<SubscriptionGroupFindOneInput, 'serviceKey'>
  ): Promise<boolean> {
    return await this.subscriptionGroupClientService.deleteOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }
}
