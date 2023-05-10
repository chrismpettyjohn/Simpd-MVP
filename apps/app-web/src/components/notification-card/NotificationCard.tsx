import React from 'react'
import { NotificationCardAuthorElement, NotificationCardAuthorInfoContainer, NotificationCardElement, NotificationCardIconElement, NotificationCardTextContainer } from './NotificationCard.sty';

export function NotificationCard() {
  return (
    <NotificationCardElement>
      <NotificationCardAuthorElement>
        <img
          alt="FairLan's profile picture"
          src="https://i.imgur.com/CesvKGF.png"
          className="notification-card-image"
        />
        <NotificationCardAuthorInfoContainer>
          <h1>
            FairLan
          </h1>
          <span>
            @FairLan
          </span>
        </NotificationCardAuthorInfoContainer>
      </NotificationCardAuthorElement>
      <NotificationCardTextContainer>
        <h1 className="author-container">
          Reacted to your comment:
        </h1>
        <span className="message-content">
          <code>yes mami</code>
        </span>
      </NotificationCardTextContainer>
      <NotificationCardIconElement viewBox="0 0 1024 1024" className="notification-card-icon">
        <path
          d="M426 384q208 30 321 159t149 311q-154-218-470-218v174l-298-298 298-298v170z"
          className=""
        ></path>
      </NotificationCardIconElement>
    </NotificationCardElement>
  )
}