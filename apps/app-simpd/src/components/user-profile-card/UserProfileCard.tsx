import React from 'react'
import { Link } from 'wouter';
import './UserProfileCard.css';
import { UserProfileCardProps } from './UserProfileCard.types';
import { UserProfileCardCoverPhoto, UserProfileCardContainer, UserProfileCardInfoContainer, UserProfileCardAvatar, UserProfileCardActionsContainer, UserProfileCardContent } from './UserProfileCard.sty';

export function UserProfileCard({ profile }: UserProfileCardProps) {
  return (
    <UserProfileCardContainer>
      <UserProfileCardContent>
        <UserProfileCardCoverPhoto />
        <UserProfileCardInfoContainer>
          <UserProfileCardAvatar />
          <UserProfileCardActionsContainer>
            <svg viewBox="0 0 1024 1024">
              <path
                d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"
                className=""
              ></path>
            </svg>
            <svg viewBox="0 0 1024 1024">
              <path
                d="M128 512v341.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v341.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 188.331v451.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-451.669l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
                className=""
              ></path>
            </svg>
          </UserProfileCardActionsContainer>
        </UserProfileCardInfoContainer>
        <h1>{profile.displayName}</h1>
        <div className="user-profile-card-container5">
          <span>{profile.username}</span>
          <span>Seen Yesterday</span>
        </div>
        <span className="user-profile-card-text3">
          <span className="">
            {profile.biography}
          </span>
          <br className=""></br>
        </span>
        {
          profile.websiteURL && (
            <a href={profile.websiteURL} className="user-profile-card-navlink" target="_blank" rel="noreferrer">
              <div className="user-profile-card-container6">
                <i className="fa fa-link" />
                <span className="user-profile-card-text6">
                  {profile.websiteURL}</span>
              </div>
            </a>
          )
        }
      </UserProfileCardContent>
    </UserProfileCardContainer>
  )
}