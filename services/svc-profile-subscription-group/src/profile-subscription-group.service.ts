import {Injectable} from '@nestjs/common';
import {
  BaseSubscriptionGroupClientService,
  SVC_PROFILE_SUBSCRIPTION_GROUP_NAME,
  SubscriptionGroupClientService,
} from '@simpd/lib-client';

@Injectable()
export class ProfileSubscriptionGroupService extends BaseSubscriptionGroupClientService {
  constructor(subscriptionGroupService: SubscriptionGroupClientService) {
    super(SVC_PROFILE_SUBSCRIPTION_GROUP_NAME, subscriptionGroupService);
  }
}
