import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';
import React, { ChangeEvent, useRef } from 'react';
import { UploadNewMediaProps } from './UploadNewMedia.types';
import { MediaType, useMediaFetchOne, useMediaUpload } from '@simpd/lib-web';

export function UploadNewMedia({ onCreation }: UploadNewMediaProps) {
  const mediaUpload = useMediaUpload();
  const mediaFetchOne = useMediaFetchOne();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelectFile = () => {
    inputRef.current?.click();
  }

  const onUploadMedia = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPhoto = e.target.files![0];
    const newPhotoMediaID = await mediaUpload.onUpload(newPhoto);
    const newMedia = await mediaFetchOne.fetch({ id: newPhotoMediaID });

    if (newMedia.type === MediaType.Other) {
      toast.error(`You can't upload that type of file`);
      return;
    }
    onCreation(newMedia);
  }

  return (
    <>
      <i className="fa fa-images" style={{ cursor: 'pointer' }} onClick={onSelectFile} />
      {createPortal(<input style={{ visibility: 'hidden' }} type="file" onChange={onUploadMedia} ref={inputRef} />, document.body)}
    </>
  )
}