import React, { ChangeEvent, useEffect, useState } from 'react';
import { ChangeCoverPhotoProps } from './ChangeCoverPhoto.types';
import { MediaFragment, useMediaFetchOne, useMediaUpload, useProfileUpdate } from '@simpd/lib-web';

export function ChangeCoverPhoto({ profile }: ChangeCoverPhotoProps) {
  const mediaUpload = useMediaUpload();
  const mediaFetchOne = useMediaFetchOne();
  const profileUpdate = useProfileUpdate();
  const [currentCoverPhoto, setCurrentCoverPhoto] = useState<MediaFragment>();

  const onUploadCoverPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPhoto = e.target.files![0];
    const newPhotoMediaID = await mediaUpload.onUpload(profile.id, newPhoto);
    const newMedia = await mediaFetchOne.fetch({ mediaID: newPhotoMediaID });
    await profileUpdate.execute({
      profileID: profile.id,
      username: profile.username,
      changes: {
        coverPhotoMediaID: newMedia.id
      }
    })
    setCurrentCoverPhoto(newMedia);
  }

  const onUseCurrentCoverPhoto = async () => {
    if (!profile.coverPhotoMediaID) {
      return;
    }
    const currentPhoto = await mediaFetchOne.fetch({ mediaID: profile.coverPhotoMediaID });
    setCurrentCoverPhoto(currentPhoto);
  }

  useEffect(() => {
    onUseCurrentCoverPhoto()
  }, [profile.coverPhotoMediaID]);

  return (
    <>
      {
        currentCoverPhoto && (
          <img src={currentCoverPhoto.url} style={{ height: 200, width: '100%', borderRadius: 4 }} />
        )
      }
      <input type="file" onChange={onUploadCoverPhoto} />
    </>
  )
}