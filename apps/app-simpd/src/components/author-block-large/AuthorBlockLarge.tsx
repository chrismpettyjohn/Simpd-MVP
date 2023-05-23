import React from 'react';
import { Link } from 'wouter';
import { AuthorBlockLargeProps } from './AuthorBlockLarge.types';

import { AuthorBlockLargeElement, AuthorBlockUserInfoContainer } from './AuthorBlockLarge.sty';

export function AuthorBlockLarge({ profile }: AuthorBlockLargeProps) {
  return (
    <>
      <Link to={`/profiles/${profile.username}`}>
        <AuthorBlockLargeElement>
          <img
            src={profile.profilePicture?.url}
            className="post-card-image1"
          />
        </AuthorBlockLargeElement>
      </Link>
      <AuthorBlockUserInfoContainer>
        <Link to={`/profiles/${profile.username}`}>
          <h1>
            {profile.displayName}
          </h1>
        </Link >
        <Link to={`/profiles/${profile.username}`}></Link>
        <span>
          @{profile.username}
        </span>
      </AuthorBlockUserInfoContainer >
    </>
  )
}