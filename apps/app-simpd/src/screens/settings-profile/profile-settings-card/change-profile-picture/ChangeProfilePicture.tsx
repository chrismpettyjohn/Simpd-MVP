import React, { ChangeEvent, useEffect, useState } from 'react';
import { ChangeProfilePictureProps } from './ChangeProfilePicture.types';
import { MediaFragment, useMediaFetchOne, useMediaUpload, useProfileUpdate } from '@simpd/lib-web';

export function ChangeProfilePicture({ profile }: ChangeProfilePictureProps) {
  const mediaUpload = useMediaUpload();
  const mediaFetchOne = useMediaFetchOne();
  const profileUpdate = useProfileUpdate();
  const [currentProfilePicture, setCurrentProfilePicture] = useState<MediaFragment>();

  const onUploadProfilePicture = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPhoto = e.target.files![0];
    const newPhotoMediaID = await mediaUpload.onUpload(profile.id, newPhoto);
    const newMedia = await mediaFetchOne.fetch({ mediaID: newPhotoMediaID });
    await profileUpdate.execute({
      profileID: profile.id,
      username: profile.username,
      changes: {
        profilePictureMediaID: newMedia.id
      }
    })
    setCurrentProfilePicture(newMedia);
  }

  const onUseCurrentProfilePicture = async () => {
    if (!profile.profilePictureMediaID) {
      return;
    }
    const currentPhoto = await mediaFetchOne.fetch({ mediaID: profile.profilePictureMediaID });
    setCurrentProfilePicture(currentPhoto);
  }

  useEffect(() => {
    onUseCurrentProfilePicture
  }, [profile.profilePictureMediaID]);

  return (
    <>
      {
        currentProfilePicture && (
          <img src={currentProfilePicture.url} />
        )
      }
      <input type="file" onChange={onUploadProfilePicture} />
    </>
  )
}