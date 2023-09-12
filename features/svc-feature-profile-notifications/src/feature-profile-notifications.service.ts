import {Injectable} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {
  INTERNAL_MESSAGE_SVC_COMMENT_WAS_CREATED,
  INTERNAL_MESSAGE_SVC_MESSAGE_REACTION_WAS_CREATED,
  INTERNAL_MESSAGE_SVC_MESSAGE_WAS_CREATED,
  INTERNAL_MESSAGE_SVC_POST_REACTION_WAS_CREATED,
  INTERNAL_MESSAGE_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_WAS_CREATED,
  INTERNAL_MESSAGE_SVC_TIP_WAS_CREATED,
  MessageClientService,
  MessageReactionClientService,
  MessageReactionWasCreatedInternalMessage,
  MessageWasCreatedInternalMessage,
  NotificationClientService,
  NotificationResourceType,
  PostClientService,
  PostCommentClientService,
  PostCommentWasCreatedInternalMessage,
  PostReactionClientService,
  PostReactionWasCreatedInternalMessage,
  PostType,
  PostWasCreatedInternalMessage,
  PostWithSharedContentWire,
  ProfileSubcriptionGroupMembershipWasCreatedMessage,
  TipClientService,
  TipWasCreatedInternalMessage,
} from '@simpd/lib-client';
import {INTERNAL_MESSAGE_SVC_POST_WAS_CREATED} from 'libs/lib-client/src/svc-post/post.const';

@Injectable()
export class FeatureProfileNotificationsService {
  constructor(
    private readonly tipClientService: TipClientService,
    private readonly postClientService: PostClientService,
    private readonly messageClientService: MessageClientService,
    private readonly postCommentClientService: PostCommentClientService,
    private readonly notificationClientService: NotificationClientService,
    private readonly postReactionClientService: PostReactionClientService,
    private readonly messageReactionClientService: MessageReactionClientService
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

  @MessagePattern(INTERNAL_MESSAGE_SVC_MESSAGE_WAS_CREATED)
  async onMessageReceived(message: MessageWasCreatedInternalMessage) {
    const matchingMessage = await this.messageClientService.findOne({
      id: message.messageID,
    });
    await this.notificationClientService.createOne<'PROFILE_MESSAGE_RECEIVED'>({
      resourceType: NotificationResourceType.Profile,
      profileID: matchingMessage.receivingProfileID,
      eventKey: 'PROFILE_MESSAGE_RECEIVED',
      eventMetadata: {
        messageID: matchingMessage.id!,
      },
    });
  }

  @MessagePattern(INTERNAL_MESSAGE_SVC_MESSAGE_REACTION_WAS_CREATED)
  async onNewMessageReaction(
    message: MessageReactionWasCreatedInternalMessage
  ) {
    const matchingMessageReaction =
      await this.messageReactionClientService.findOne({
        id: message.messageReactionID,
      });
    const matchingMessage = await this.messageClientService.findOne({
      id: matchingMessageReaction.messageID,
    });

    await this.notificationClientService.createOne<'MESSAGE_REACTION_RECEIVED'>(
      {
        resourceType: NotificationResourceType.Profile,
        profileID: matchingMessage.receivingProfileID,
        eventKey: 'MESSAGE_REACTION_RECEIVED',
        eventMetadata: {
          messageReactionID: matchingMessageReaction.id!,
        },
      }
    );
  }

  @MessagePattern(INTERNAL_MESSAGE_SVC_COMMENT_WAS_CREATED)
  async onNewPostComment(message: PostCommentWasCreatedInternalMessage) {
    const matchingPostComment = await this.postCommentClientService.findOne({
      id: message.postCommentID,
    });
    const matchingPost = await this.postClientService.findOne({
      id: matchingPostComment.postID,
    });
    await this.notificationClientService.createOne<'POST_COMMENT_RECEIVED'>({
      resourceType: NotificationResourceType.Profile,
      profileID: matchingPost.profileID,
      eventKey: 'POST_COMMENT_RECEIVED',
      eventMetadata: {
        postCommentID: matchingPostComment.id!,
      },
    });
  }

  @MessagePattern(INTERNAL_MESSAGE_SVC_POST_REACTION_WAS_CREATED)
  async onNewPostReaction(message: PostReactionWasCreatedInternalMessage) {
    const matchingPostReaction = await this.postReactionClientService.findOne({
      id: message.postReactionID,
    });
    const matchingPost = await this.postClientService.findOne({
      id: matchingPostReaction.postID,
    });
    await this.notificationClientService.createOne<'POST_REACTION_RECEIVED'>({
      resourceType: NotificationResourceType.Profile,
      profileID: matchingPost.profileID,
      eventKey: 'POST_REACTION_RECEIVED',
      eventMetadata: {
        postReactionID: matchingPostReaction.id!,
      },
    });
  }

  @MessagePattern(INTERNAL_MESSAGE_SVC_POST_WAS_CREATED)
  async onNewPostShare(message: PostWasCreatedInternalMessage) {
    const matchingPost = await this.postClientService.findOne({
      id: message.postID,
    });

    if (matchingPost.type !== PostType.SharedContent) {
      return;
    }

    const postContent: PostWithSharedContentWire = matchingPost;

    const originalPost = await this.postClientService.findOne({
      id: postContent.postID,
    });

    await this.notificationClientService.createOne<'POST_WAS_SHARED'>({
      resourceType: NotificationResourceType.Profile,
      profileID: originalPost.profileID,
      eventKey: 'POST_WAS_SHARED',
      eventMetadata: {
        originalPostID: originalPost.id!,
        sharedPostID: matchingPost.id!,
      },
    });
  }
}
