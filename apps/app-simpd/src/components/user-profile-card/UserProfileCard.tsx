import './UserProfileCard.css';
import React, { useContext } from 'react'
import { UserProfileCardProps } from './UserProfileCard.types';
import { ProfileFragment, sessionContext } from '@simpd/lib-web';
import { ChangeCoverPhoto } from './change-cover-photo/ChangeCoverPhoto';
import { ChangeProfilePicture } from './change-profile-picture/ChangeProfilePicture';
import { UserProfileCardCoverPhoto, UserProfileCardContainer, UserProfileCardInfoContainer, UserProfileCardAvatar, UserProfileCardActionsContainer, UserProfileCardContent } from './UserProfileCard.sty';

export function UserProfileCard({ profile, onChanges = () => null }: UserProfileCardProps) {
  const { session, setSession } = useContext(sessionContext);
  const isAuthenticatedAsProfile = session?.profileID === profile.id;

  const onUpdateProfilePicture = (newProfile: ProfileFragment) => {
    if (isAuthenticatedAsProfile) {
      setSession({ profile: newProfile });
    }
    onChanges(newProfile);
  }

  const onUpdateCoverPhoto = (newProfile: ProfileFragment) => {
    if (isAuthenticatedAsProfile) {
      setSession({ profile: newProfile });
    }
    onChanges(newProfile);
  }

  return (
    <UserProfileCardContainer>
      <UserProfileCardContent>
        <UserProfileCardCoverPhoto backgroundUrl={profile.coverPhoto?.url ?? ''}>
          {
            isAuthenticatedAsProfile && <ChangeCoverPhoto profile={profile} onChange={onUpdateProfilePicture} />
          }
        </UserProfileCardCoverPhoto>
        <UserProfileCardInfoContainer>
          <UserProfileCardAvatar backgroundUrl={profile.profilePicture?.url ?? ''}>
            {
              isAuthenticatedAsProfile && <ChangeProfilePicture profile={profile} onChange={onUpdateCoverPhoto} />
            }
          </UserProfileCardAvatar>
          {
            !isAuthenticatedAsProfile && (
              <UserProfileCardActionsContainer>
                <i className="fa fa-star" />
                <i className="fa fa-share" />
              </UserProfileCardActionsContainer>
            )
          }
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