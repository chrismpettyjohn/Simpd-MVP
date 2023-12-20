import { AlbumCreateInput, useAlbumCreate } from '@simpd/lib-web';
import { Modal } from 'antd';
import { AlbumEditor } from 'components/album-editor/AlbumEditor';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'wouter';

export function CreateAlbumDialog() {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const createAlbum = useAlbumCreate();

  function toggle() {
    setIsOpen(_ => !_);
  }

  async function onCreate(albumDTO: AlbumCreateInput) {
    const newAlbum = await createAlbum.execute(albumDTO);
    toast.success(`Successfully created new album!`);
    setLocation(`/albums/${newAlbum.id}`);
  }

  return (
    <>
      <i className="fa fa-plus fa-2x" onClick={toggle} style={{ cursor: 'pointer' }} />
      {
        isOpen && (
          <Modal title="New Album" open onCancel={toggle} footer={false}>
            <AlbumEditor onSave={onCreate} />
          </Modal>
        )
      }
    </>
  )
}