import { Card } from '../card/Card';
import { Button } from '../button/Button';
import React, { SyntheticEvent, useState } from 'react';
import { CreateNewPostCardProps } from './CreateNewPostCard.types';
import { MediaType, PostFragment, usePostWithAlbumCreate, usePostWithImageCreate, usePostWithTextCreate, usePostWithVideoCreate } from '@simpd/lib-web';
import { ProfileSubscriptionGroupDropdown } from '../profile-subscription-group-dropdown/ProfileSubscriptionGroupDropdown';
import { UploadMediaDropdown } from '../upload-media-dropdown/UploadMediaDropdown';

export function CreateNewPostCard({ onCreate }: CreateNewPostCardProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [content, setContent] = useState('');
  const postWithTextCreate = usePostWithTextCreate();
  const postWithImageCreate = usePostWithImageCreate();
  const postWithVideoCreate = usePostWithVideoCreate();
  const postWithAlbumCreate = usePostWithAlbumCreate();
  const [subscriptionGroupIDs, setSubscriptionGroupIDS] = useState<number[]>([]);

  const onAddFile = (file: File) => {
    setFiles(_ => [file, ..._]);
  }

  const onRemoveFile = (file: File) => {
    setFiles(_ => _.filter(_ => _.name !== file.name));
  }

  const onToggleSubscriptionGroupID = (subscriptionGroupID: number) => {
    setSubscriptionGroupIDS(_ => {
      if (_.includes(subscriptionGroupID)) {
        return _.filter(_ => _ !== subscriptionGroupID);
      }
      return [..._, subscriptionGroupID];
    });
  }

  const onCreateNewPost = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!content) {
      return;
    }

    let newPost: PostFragment | null = null;

    // if (files.length === 0) {
    //   newPost = await postWithTextCreate.execute({ content });
    // }

    // if (files.length > 1) {
    //   const mediaIDs = media.map(_ => _.id);
    //   newPost = await postWithAlbumCreate.execute({ content, mediaIDs: mediaIDs });
    // }

    // if (files.length === 1 && media[0].type === MediaType.Image) {
    //   newPost = await postWithImageCreate.execute({ content, mediaID: media[0].id });
    // }

    // if (files.length === 1 && media[0].type === MediaType.Video) {
    //   newPost = await postWithVideoCreate.execute({ content, mediaID: media[0].id });
    // }

    if (!newPost) {
      throw new Error('Failed to create post');
    }

    onCreate(newPost);
    setContent('');
  }

  console.log(subscriptionGroupIDs)

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
            <UploadMediaDropdown files={files} onAddFile={onAddFile} onRemoveFile={onRemoveFile} />
            <ProfileSubscriptionGroupDropdown subscriptionGroupIDs={subscriptionGroupIDs} onToggleSubscriptionGroupID={onToggleSubscriptionGroupID} />
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