import React from 'react'
import { MessageCardProps } from './MessageCard.types';
import { MessageReactions } from './message-reactions/MessageReactions';
import { AuthorBlockSmall } from '../author-block-small/AuthorBlockSmall';
import { MessageCardElement, MessageCardTextContainer } from './MessageCard.sty';

export function MessageCard({ message, profile }: MessageCardProps) {
  return (
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
      <MessageReactions message={message} />
    </MessageCardElement>
  )
}
