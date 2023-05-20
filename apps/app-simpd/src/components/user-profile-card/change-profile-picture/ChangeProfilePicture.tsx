import React, { ChangeEvent, useRef } from 'react';
import { UserProfileChangeMediaIcon } from '../UserProfileCard.sty';
import { ChangeProfilePictureProps } from './ChangeProfilePicture.types';
import { useMediaFetchOne, useMediaUpload, useProfileUpdate } from '@simpd/lib-web';
import { createPortal } from 'react-dom';

export function ChangeProfilePicture({ profile, onChange }: ChangeProfilePictureProps) {
  const mediaUpload = useMediaUpload();
  const mediaFetchOne = useMediaFetchOne();
  const profileUpdate = useProfileUpdate();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelectFile = () => {
    inputRef.current?.click();
  }

  const onUploadProfilePicture = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPhoto = e.target.files![0];
    const newPhotoMediaID = await mediaUpload.onUpload(profile.id, newPhoto);
    const newMedia = await mediaFetchOne.fetch({ mediaID: newPhotoMediaID });
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
    <>
      <UserProfileChangeMediaIcon className="fa fa-file-import" onClick={onSelectFile} />
      {createPortal(<input style={{ visibility: 'hidden' }} type="file" onChange={onUploadProfilePicture} ref={inputRef} />, document.body)}
    </>
  )
}