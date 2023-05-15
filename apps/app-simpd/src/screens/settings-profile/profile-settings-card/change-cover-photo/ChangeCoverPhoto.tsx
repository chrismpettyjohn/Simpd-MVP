import React, { SyntheticEvent, useState } from 'react';
import { ChangeCoverPhotoProps } from './ChangeCoverPhoto.types';
import { useMediaUpload } from '@simpd/lib-web';

export function ChangeCoverPhoto({ profile }: ChangeCoverPhotoProps) {
  const mediaUpload = useMediaUpload();
  const [newCoverPhoto, setNewCoverPhoto] = useState<File>();

  const onUploadCoverPhoto = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!newCoverPhoto) {
      return;
    }
    await mediaUpload.onUpload(profile.id, newCoverPhoto);
  }

  return (
    <form onSubmit={onUploadCoverPhoto}>
      <input type="file" onChange={e => setNewCoverPhoto(e.target?.files?.[0])} />
      <button type="submit">Submit</button>
    </form>
  )
}