import React from 'react'
import { Link } from 'wouter';
import { MessageCardProps } from './MessageCard.types';
import { AuthorBlockSmall } from '../author-block-small/AuthorBlockSmall';
import { MessageCardElement, MessageCardTextContainer, MessageIconElement } from './MessageCard.sty';

export function MessageCard({ message, profile }: MessageCardProps) {
  return (
    <Link to={`/messages/threads/${profile.username}`}>
      <MessageCardElement>
        <AuthorBlockSmall profile={profile} />
        <MessageCardTextContainer>
          <h1 className="author-container">
            They Said:
          </h1>
          <span className="message-content">
            {message.content}
          </span>
        </MessageCardTextContainer>
        <MessageIconElement className="fa fa-share" />
      </MessageCardElement>
    </Link>
  )
}
