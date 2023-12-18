import React from 'react'
import { NotificationCardAuthor, NotificationCardContentContainer, NotificationCardElement, NotificationCardActionContainer, NotificationCardNewBadge } from './NotificationCard.sty';
import { NotificationCardProps } from 'components/notification-card/NotificationCard.types';

export function NotificationCard({ notification }: NotificationCardProps) {
  return (
    <NotificationCardElement>
      <NotificationCardAuthor
        alt="FairLan's profile picture"
        src="https://i.imgur.com/CesvKGF.png"
        className="notification-card-image"
      />
      <NotificationCardContentContainer>
        <h3>Reaction</h3>
        <span>
          Poppy Brown winked at you
        </span>
      </NotificationCardContentContainer>
      <NotificationCardActionContainer>
        <NotificationCardNewBadge>
          NEW
        </NotificationCardNewBadge>
        <small>9:03pm</small>
      </NotificationCardActionContainer>
    </NotificationCardElement >
  )
}