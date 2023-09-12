import {Module} from '@nestjs/common';
import {
  MessageClientModule,
  MessageReactionClientModule,
  NotificationClientModule,
  PostClientModule,
  PostCommentClientModule,
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
  ],
})
export class FeatureProfileNotificationsModule {}
