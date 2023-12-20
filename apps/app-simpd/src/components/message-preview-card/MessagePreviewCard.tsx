import React from 'react';
import { Link } from 'wouter';
import { MessagePreviewCardProps } from './MessagePreviewCard.types';
import { MessagePreviewAuthorImage, MessagePreviewCardContent, MessagePreviewCardElement, MessagePreviewTimestamp } from 'components/message-preview-card/MessagePreviewCard.styled';
import { NotificationCardNewBadge } from 'components/notification-card/NotificationCard.sty';

export function MessagePreviewCard({ messageContact }: MessagePreviewCardProps) {
  return (
    <Link to={`/messages/threads/${messageContact.profile.username}`}>
      <MessagePreviewCardElement>
        <MessagePreviewAuthorImage src={messageContact.profile.profilePicture!.url} />
        <MessagePreviewCardContent>
          <p>
            all i wanna do is bang bang and take ur money
          </p>
          <b>
            {messageContact.profile.displayName}
          </b>
        </MessagePreviewCardContent>
        <MessagePreviewTimestamp>
          <NotificationCardNewBadge>2</NotificationCardNewBadge>
          9:03pm
        </MessagePreviewTimestamp>
      </MessagePreviewCardElement>
    </Link>
  )
}