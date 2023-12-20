import { AlbumCreateInput, useAlbumCreate, useAlbumUpdate } from '@simpd/lib-web';
import { Modal } from 'antd';
import { AlbumEditDialogProps } from 'components/album-edit-dialog/AlbumEditDialog.types';
import { AlbumEditor } from 'components/album-editor/AlbumEditor';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export function AlbumEditDialog({ album, onChanges }: AlbumEditDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const updateAlbum = useAlbumUpdate();

  function toggle() {
    setIsOpen(_ => !_);
  }

  async function onUpdate(albumDTO: AlbumCreateInput) {
    await updateAlbum.execute({ id: album.id }, albumDTO);
    toast.success(`Successfully updated album!`);
    onChanges();
  }

  const modalTitle = `Editing Album: ${album.name}`

  return (
    <>
      <i className="fa fa-pen-square fa-2x" onClick={toggle} style={{ cursor: 'pointer' }} />
      {
        isOpen && (
          <Modal title={modalTitle} open onCancel={toggle} footer={false}>
            <AlbumEditor defaultAlbum={album} onSave={onUpdate} />
          </Modal>
        )
      }
    </>
  )
}