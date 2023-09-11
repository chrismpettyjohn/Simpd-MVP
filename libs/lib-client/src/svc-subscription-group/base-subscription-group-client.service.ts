import {SubscriptionGroupClientService} from './subscription-group-client.service';
import {
  SubscriptionGroupCreateOneInput,
  SubscriptionGroupFindManyInput,
  SubscriptionGroupFindOneInput,
  SubscriptionGroupServiceKey,
  SubscriptionGroupWire,
} from './subscription-group-client.types';

export class BaseSubscriptionGroupClientService<
  Service extends SubscriptionGroupServiceKey
> {
  constructor(
    private readonly serviceKey: Service,
    private readonly subscriptionGroupClientService: SubscriptionGroupClientService<Service>
  ) {}

  async createOne(
    input: Omit<SubscriptionGroupCreateOneInput<Service>, 'serviceKey'>
  ): Promise<SubscriptionGroupWire<Service>> {
    return await this.subscriptionGroupClientService.createOne({
      ...input,
      serviceKey: this.serviceKey,
    });
  }

  async findOne(
    filter: Omit<SubscriptionGroupFindOneInput<Service>, 'serviceKey'>
  ): Promise<SubscriptionGroupWire<Service>> {
    return await this.subscriptionGroupClientService.findOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async findMany(
    filter: Omit<SubscriptionGroupFindManyInput<Service>, 'serviceKey'>
  ): Promise<SubscriptionGroupWire<Service>[]> {
    return await this.subscriptionGroupClientService.findMany({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async deleteOne(
    filter: Omit<SubscriptionGroupFindOneInput<Service>, 'serviceKey'>
  ): Promise<boolean> {
    return await this.subscriptionGroupClientService.deleteOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }
}
