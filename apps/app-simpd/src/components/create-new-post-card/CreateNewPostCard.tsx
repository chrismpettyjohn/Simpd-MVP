import { Card } from '../card/Card';
import { Button } from '../button/Button';
import React, { SyntheticEvent, useState } from 'react';
import { CreateNewPostCardProps } from './CreateNewPostCard.types';
import { UploadMediaDropdown } from '../upload-media-dropdown/UploadMediaDropdown';
import { ProfileSubscriptionGroupDropdown } from '../profile-subscription-group-dropdown/ProfileSubscriptionGroupDropdown';
import { MediaType, PostFragment, useMediaUpload, usePostPrivacyCreate, usePostWithAlbumCreate, usePostWithImageCreate, usePostWithTextCreate, usePostWithVideoCreate } from '@simpd/lib-web';

export function CreateNewPostCard({ onCreate }: CreateNewPostCardProps) {
  const mediaUpload = useMediaUpload();
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const postPrivacyCreate = usePostPrivacyCreate();
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

    const uploadedMedia = await Promise.all(files.map(file => mediaUpload.onUpload((file))));

    if (uploadedMedia.length === 0) {
      newPost = await postWithTextCreate.execute({ content });
    }

    if (uploadedMedia.length > 1) {
      const mediaIDs = uploadedMedia.map(_ => _.id);
      newPost = await postWithAlbumCreate.execute({ content, mediaIDs: mediaIDs });
    }

    if (uploadedMedia.length === 1 && uploadedMedia[0].type === MediaType.Image) {
      newPost = await postWithImageCreate.execute({ content, mediaID: uploadedMedia[0].id });
    }

    if (uploadedMedia.length === 1 && uploadedMedia[0].type === MediaType.Video) {
      newPost = await postWithVideoCreate.execute({ content, mediaID: uploadedMedia[0].id });
    }

    if (!newPost) {
      throw new Error('Failed to create post');
    }

    if (subscriptionGroupIDs.length > 0) {
      await postPrivacyCreate.execute({
        postID: newPost.id,
        policy: {
          allowedSubscriptionGroupIDs: subscriptionGroupIDs,
        }
      });
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