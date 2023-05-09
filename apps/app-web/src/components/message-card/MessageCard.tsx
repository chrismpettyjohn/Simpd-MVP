import React from 'react'
import { MessageCardAuthorElement, MessageCardAuthorInfoContainer, MessageCardElement, MessageCardTextContainer, MessageIconElement } from './MessageCard.styled.ts';

export function MessageCard() {
  return (
    <MessageCardElement>
      <MessageCardAuthorElement>
        <img
          alt="FairLan Posted"
          src="https://i.imgur.com/CesvKGF.png"
        />
        <MessageCardAuthorInfoContainer>
          <h1>
            FairLan
          </h1>
          <span>
            @FairLan
          </span>
        </MessageCardAuthorInfoContainer>
      </MessageCardAuthorElement>
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
  )
}
