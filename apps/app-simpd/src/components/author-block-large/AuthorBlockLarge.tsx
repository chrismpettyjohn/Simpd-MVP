import React from 'react';
import { AuthorBlockLargeElement, AuthorBlockUserInfoContainer } from './AuthorBlockLarge.sty';

export function AuthorBlockLarge() {
  return (
    <AuthorBlockLargeElement>
      <img
        src="https://i.imgur.com/CesvKGF.png"
        className="post-card-image1"
      />
      <AuthorBlockUserInfoContainer>
        <h1>
          FairLan
        </h1>
        <span>
          @FairLan
        </span>
      </AuthorBlockUserInfoContainer>
    </AuthorBlockLargeElement>
  )
}