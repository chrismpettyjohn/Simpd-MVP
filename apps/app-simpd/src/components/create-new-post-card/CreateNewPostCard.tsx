import { Card } from '../card/Card';
import { Button } from '../button/Button';
import React, { SyntheticEvent, useState } from 'react';
import { CreateNewPostCardProps } from './CreateNewPostCard.types';
import { UploadNewMedia } from './upload-new-media/UploadNewMedia';
import { MediaFragment, MediaType, PostFragment, usePostWithAlbumCreate, usePostWithImageCreate, usePostWithTextCreate, usePostWithVideoCreate } from '@simpd/lib-web';

export function CreateNewPostCard({ onCreate }: CreateNewPostCardProps) {
  const [content, setContent] = useState('');
  const postWithTextCreate = usePostWithTextCreate();
  const postWithImageCreate = usePostWithImageCreate();
  const postWithVideoCreate = usePostWithVideoCreate();
  const postWithAlbumCreate = usePostWithAlbumCreate();
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

    let newPost: PostFragment | null = null;

    if (media.length === 0) {
      newPost = await postWithTextCreate.execute({ content });
    }

    if (media.length > 1) {
      const mediaIDs = media.map(_ => _.id);
      newPost = await postWithAlbumCreate.execute({ content, mediaIDs: mediaIDs });
    }

    if (media.length === 1 && media[0].type === MediaType.Image) {
      newPost = await postWithImageCreate.execute({ content, mediaID: media[0].id });
    }

    if (media.length === 1 && media[0].type === MediaType.Video) {
      newPost = await postWithVideoCreate.execute({ content, mediaID: media[0].id });
    }

    if (!newPost) {
      throw new Error('Failed to create post');
    }

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