import React from 'react';
import { AuthorBlockSmallElement, AuthorBlockSmallInfoContainer } from "./AuthorBlockSmall.sty";

export function AuthorBlockSmall() {
  return (
    <AuthorBlockSmallElement>
      <img
        alt="FairLan's profile picture"
        src="https://i.imgur.com/CesvKGF.png"
        className="notification-card-image"
      />
      <AuthorBlockSmallInfoContainer>
        <h1>
          FairLan
        </h1>
        <span>
          @FairLan
        </span>
      </AuthorBlockSmallInfoContainer>
    </AuthorBlockSmallElement>
  )
}