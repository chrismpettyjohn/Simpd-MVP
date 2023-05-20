import React from 'react'
import { AuthorBlockSmall } from '../author-block-small/AuthorBlockSmall';
import { MessageCardElement, MessageCardTextContainer, MessageIconElement } from './MessageCard.sty';
import { Link } from 'wouter';

export function MessageCard() {
  return (
    <Link to={`/messages/threads/lechris`}>
      <MessageCardElement>
        <AuthorBlockSmall />
        <MessageCardTextContainer>
          <h1 className="author-container">
            They Said:
          </h1>
          <span className="message-content">
            r u an asparagus
          </span>
        </MessageCardTextContainer>
        <MessageIconElement viewBox="0 0 1024 1024" className="message-card-icon">
          <path
            d="M426 384q208 30 321 159t149 311q-154-218-470-218v174l-298-298 298-298v170z"
            className=""
          ></path>
        </MessageIconElement>
      </MessageCardElement>
    </Link>
  )
}
