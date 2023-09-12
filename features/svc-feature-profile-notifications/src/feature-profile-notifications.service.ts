import {Injectable} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {
  INTERNAL_MESSAGE_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_WAS_CREATED,
  INTERNAL_MESSAGE_SVC_TIP_WAS_CREATED,
  NotificationClientService,
  NotificationResourceType,
  ProfileSubcriptionGroupMembershipWasCreatedMessage,
  TipClientService,
  TipWasCreatedInternalMessage,
} from '@simpd/lib-client';

@Injectable()
export class FeatureProfileNotificationsService {
  constructor(
    private readonly tipClientService: TipClientService,
    private readonly notificationClientService: NotificationClientService
  ) {}

  @MessagePattern(
    INTERNAL_MESSAGE_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_WAS_CREATED
  )
  async onNewProfileSubscription(
    message: ProfileSubcriptionGroupMembershipWasCreatedMessage
  ) {
    await this.notificationClientService.createOne<'PROFILE_SUBSCRIPTION_RECEIVED'>(
      {
        resourceType: NotificationResourceType.Profile,
        profileID: message.recipientProfileID,
        eventKey: 'PROFILE_SUBSCRIPTION_RECEIVED',
        eventMetadata: {
          recipientProfileID: message.recipientProfileID,
          subscriberProfileID: message.subscriberProfileID,
          subscriptionGroupID: message.subscriptionGroupID,
        },
      }
    );
  }

  @MessagePattern(INTERNAL_MESSAGE_SVC_TIP_WAS_CREATED)
  async onTipReceived(message: TipWasCreatedInternalMessage) {
    const matchingTip = await this.tipClientService.findOne({
      id: message.tipID,
    });
    await this.notificationClientService.createOne<'PROFILE_TIP_RECEIVED'>({
      resourceType: NotificationResourceType.Profile,
      profileID: matchingTip.receivingProfileID,
      eventKey: 'PROFILE_TIP_RECEIVED',
      eventMetadata: {
        tipID: matchingTip.id!,
      },
    });
  }

  onMessageReceived() {}

  onNewComment() {}

  onNewShare() {}

  onNewReaction() {}
}
