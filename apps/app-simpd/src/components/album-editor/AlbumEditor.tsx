import { AlbumCreateInput } from '@simpd/lib-web';
import { AlbumEditorProps } from 'components/album-editor/AlbumEditor.types';
import { ButtonBrand } from 'components/button/Button.remix';
import { Form } from 'components/form/Form';
import { Input } from 'components/input/Input';
import { Textarea } from 'components/textarea/Textarea';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { toast } from 'react-toastify';

export function AlbumEditor({ defaultAlbum, onSave }: AlbumEditorProps) {
  const [albumDTO, setAlbumDTO] = useState<AlbumCreateInput>({
    name: defaultAlbum?.name ?? '',
    description: defaultAlbum?.description ?? '',
  })

  function onChanges(event: ChangeEvent<HTMLInputElement>) {
    setAlbumDTO(_ => ({
      ..._,
      [event.target.name]: event.target.value,
    }))
  }

  async function onSubmit(event: SyntheticEvent) {
    try {
      event.preventDefault();
      await onSave(albumDTO);
    } catch (e: any) {
      toast.error('Failed to create new album');
      throw e;
    }
  }
  return (
    <Form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <Input name="name" value={albumDTO.name} onChange={onChanges} />
      </div>
      <div>
        <label>Description</label>
        <Textarea name="description" value={albumDTO.description} onChange={onChanges as any} />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
        <ButtonBrand>
          Save
        </ButtonBrand>
      </div>
    </Form>
  )
}