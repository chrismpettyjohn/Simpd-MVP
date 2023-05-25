import { createPortal } from 'react-dom';
import React, { ChangeEvent, useRef } from 'react';
import { UserProfileChangeMediaIcon } from '../UserProfileCard.sty';
import { ChangeProfilePictureProps } from './ChangeProfilePicture.types';
import { useMediaFetchOne, useMediaUpload, useProfileUpdate } from '@simpd/lib-web';

export function ChangeProfilePicture({ profile, onChange }: ChangeProfilePictureProps) {
  const mediaUpload = useMediaUpload();
  const mediaFetchOne = useMediaFetchOne();
  const profileUpdate = useProfileUpdate();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelectFile = () => {
    inputRef.current!.click();
  }

  const onUploadProfilePicture = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPhoto = e.target.files![0];
    const newPhotoMediaID = await mediaUpload.onUpload(newPhoto);
    const newMedia = await mediaFetchOne.fetch({ id: newPhotoMediaID });
    const newProfile = await profileUpdate.execute({
      profileID: profile.id,
      username: profile.username,
      changes: {
        coverPhotoMediaID: newMedia.id
      }
    })
    onChange(newProfile)
  }

  return (
    <div>
      <UserProfileChangeMediaIcon className="fa fa-file-import" onClick={onSelectFile} />
      {createPortal(<input id="change-profile-pic-file-inp" style={{ visibility: 'hidden' }} type="file" ref={inputRef} />, document.body)}
    </div>
  )
}