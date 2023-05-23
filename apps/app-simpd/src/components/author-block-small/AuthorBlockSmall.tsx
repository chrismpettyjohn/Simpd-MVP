import React from 'react';
import { AuthorBlockSmallProps } from './AuthorBlockSmall.types';
import { AuthorBlockSmallElement, AuthorBlockSmallInfoContainer } from "./AuthorBlockSmall.sty";

export function AuthorBlockSmall({ profile }: AuthorBlockSmallProps) {
  return (
    <AuthorBlockSmallElement>
      <img
        alt={`${profile.username}'s profile picture`}
        src={profile.profilePicture?.url}
        className="notification-card-image"
      />
      <AuthorBlockSmallInfoContainer>
        <h1>
          {profile.displayName}
        </h1>
        <span>
          @{profile.username}
        </span>
      </AuthorBlockSmallInfoContainer>
    </AuthorBlockSmallElement>
  )
}