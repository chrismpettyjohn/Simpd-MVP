import React from 'react'
import { AuthorBlockSmall } from '../author-block-small/AuthorBlockSmall';
import { MessageCardElement, MessageCardTextContainer, MessageIconElement } from './MessageCard.sty';
import { Link } from 'wouter';

export function MessageCard() {
  return (
    <Link to={`/messages/threads/lechris`}>
      <MessageCardElement>
        <AuthorBlockSmall profile={{ username: 'LOL', displayName: 'WHY' } as any} />
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
