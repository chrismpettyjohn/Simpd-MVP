import { Button } from 'components/button/Button';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { ProfileEditor } from 'components/profile-editor/ProfileEditor';
import { ChangeCoverPhoto } from './change-cover-photo/ChangeCoverPhoto';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { ChangeProfilePicture } from './change-profile-picture/ChangeProfilePicture';
import { MediaFragment, ProfileUpdateInput, sessionContext, useMediaFetchOne, useMediaUpload, useProfileFetchOne, useProfileUpdate } from '@simpd/lib-web';
import { UserProfileCardAvatar, UserProfileCardContainer, UserProfileCardContent, UserProfileCardCoverPhoto, UserProfileCardInfoContainer } from 'components/user-profile-card/UserProfileCard.sty';

export function ProfileSettingsCard() {

  const profilePictureRef = useRef<HTMLInputElement>(null);

  const mediaUpload = useMediaUpload();
  const profileUpdate = useProfileUpdate();
  const updateProfile = useProfileUpdate();
  const mediaFetchOne = useMediaFetchOne();
  const fetchProfile = useProfileFetchOne();
  const { session } = useContext(sessionContext);
  const [currentProfilePicture, setCurrentProfilePicture] = useState<MediaFragment>(session.profile.profilePicture);

  useEffect(() => {
    fetchProfile.fetch({ profileID: session.profileID });
  }, [session.profileID])

  const onUploadProfilePicture = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPhoto = e.target.files![0];
    const newPhotoMediaID = await mediaUpload.onUpload(session.p.id, newPhoto);
    const newMedia = await mediaFetchOne.fetch({ mediaID: newPhotoMediaID });
    await profileUpdate.execute({
      profileID: session.profile.id,
      username: session.profile.username,
      changes: {
        profilePictureMediaID: newMedia.id
      }
    })
    setCurrentProfilePicture(newMedia);
  }


  const onUpateProfile = async (profileDTO: ProfileUpdateInput) => {
    await updateProfile.execute({ profileID: session.profileID, changes: profileDTO });
  }

  return (
    <>
      {
        fetchProfile.data && (
          <>
            <CardAccordion defaultIsOpen header="Change Picture">
              <UserProfileCardContainer>
                <UserProfileCardContent>
                  <UserProfileCardCoverPhoto>
                    <Button style={{ borderRadius: '100%' }}><i className="fa fa-file-import" /></Button>
                    <input style={{ visibility: 'hidden' }} type="file" onChange={onUploadProfilePicture} ref={profilePictureRef} />
                  </UserProfileCardCoverPhoto>
                  <UserProfileCardInfoContainer>
                    <UserProfileCardAvatar>
                      <Button style={{ borderRadius: '100%' }}><i className="fa fa-file-import" /></Button>
                    </UserProfileCardAvatar>
                  </UserProfileCardInfoContainer>
                </UserProfileCardContent>
              </UserProfileCardContainer>
              <div style={{ width: '100%' }}>
                <ChangeProfilePicture profile={fetchProfile.data} />
              </div>
              <div style={{ width: '100%', marginTop: '2rem' }}>
                <ChangeCoverPhoto profile={fetchProfile.data} />
              </div>
            </CardAccordion>
            <CardAccordion header="Update Profile">
              <ProfileEditor defaultProfile={fetchProfile.data} onSave={onUpateProfile} />
            </CardAccordion>
          </>
        )
      }
    </>
  )
}