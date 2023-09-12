import {Module} from '@nestjs/common';
import {
  MessageClientModule,
  MessageReactionClientModule,
  NotificationClientModule,
  PostClientModule,
  PostCommentClientModule,
  PostReactionClientModule,
  ProfileSubscriptionGroupClientModule,
  TipClientModule,
} from '@simpd/lib-client';
@Module({
  imports: [
    ProfileSubscriptionGroupClientModule,
    TipClientModule,
    PostClientModule,
    MessageClientModule,
    PostCommentClientModule,
    NotificationClientModule,
    MessageReactionClientModule,
    PostReactionClientModule,
  ],
})
export class FeatureProfileNotificationsModule {}
