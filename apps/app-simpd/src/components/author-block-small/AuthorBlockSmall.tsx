import React from 'react';
import { Link } from 'wouter';
import { AuthorBlockSmallProps } from './AuthorBlockSmall.types';
import { AuthorBlockSmallElement, AuthorBlockSmallInfoContainer } from "./AuthorBlockSmall.sty";

export function AuthorBlockSmall({ profile }: AuthorBlockSmallProps) {
  return (
    <Link to={`/profiles/${profile.username}`}>
      <AuthorBlockSmallElement>
        <img
          alt={`${profile.username}'s profile picture`}
          src={profile.profilePicture?.url}
          className="notification-card-image"
        />
        <AuthorBlockSmallInfoContainer>
          <span>
            @{profile.username}
          </span>
        </AuthorBlockSmallInfoContainer>
      </AuthorBlockSmallElement>
    </Link>
  )
}