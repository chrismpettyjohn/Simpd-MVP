import { Card } from 'components/card/Card';
import { Button } from 'components/button/Button';
import React, { SyntheticEvent, useState } from 'react';
import { CreateNewPostCardProps } from './CreateNewPostCard.types';
import { UploadNewMedia } from './upload-new-media/UploadNewMedia';
import { MediaFragment, usePostWithTextCreate } from '@simpd/lib-web';

export function CreateNewPostCard({ onCreate }: CreateNewPostCardProps) {
  const [content, setContent] = useState('');
  const postWithTextCreate = usePostWithTextCreate();
  const [media, setMedia] = useState<MediaFragment[]>([]);

  const onAddMedia = (newMedia: MediaFragment) => {
    setMedia(_ => [newMedia, ..._])
  }

  const onRemoveMedia = (mediaID: number) => {
    setMedia(_ => _.filter(med => med.id !== mediaID));
  }

  const onCreateNewPost = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!content) {
      return;
    }

    const newPost = await postWithTextCreate.execute({ content });
    onCreate(newPost);
    setContent('');
  }

  return (
    <Card>
      <form onSubmit={onCreateNewPost}>
        <textarea
          className="settings-profile-textinput2 input"
          placeholder="What's on your mind?"
          value={content}
          rows={4}
          onChange={e => setContent(e.target.value)}
        />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 16, }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <UploadNewMedia onCreation={onAddMedia} />
            {
              media.map(_ => (
                <div key={`media_upload_${_.id}`} style={{ background: 'white', borderRadius: 4, color: 'black', cursor: 'pointer', padding: 4, width: 75, overflow: 'hidden' }} onClick={() => onRemoveMedia(_.id)}>
                  {_.details.originalFileName}
                </div>
              ))
            }
          </div>
          {
            content !== '' && (
              <Button type="submit">
                Post
              </Button>
            )
          }
        </div>
      </form>
    </Card>
  )
}