import React from 'react';
import { Link } from 'wouter';
import { MessagePreviewCardProps } from './MessagePreviewCard.types';
import { AuthorBlockSmall } from 'components/author-block-small/AuthorBlockSmall';
import { MessageCardElement, MessageCardTextContainer, MessageIconElement } from 'components/message-card/MessageCard.sty';

export function MessagePreviewCard({ messageContact }: MessagePreviewCardProps) {
  return (
    <Link to={`/messages/threads/${messageContact.profile.username}`}>
      <MessageCardElement>
        <AuthorBlockSmall profile={messageContact.profile} />
        <MessageCardTextContainer>
          <h1 className="author-container">
            They Said:
          </h1>
          <span className="message-content">
            r u an asparagus
          </span>
        </MessageCardTextContainer>
        <MessageIconElement className="fa fa-share" />
      </MessageCardElement>
    </Link>
  )
}