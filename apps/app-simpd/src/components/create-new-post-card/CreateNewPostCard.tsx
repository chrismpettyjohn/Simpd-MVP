import { useLocation } from 'wouter';
import { Card } from 'components/card/Card';
import { Button } from 'components/button/Button';
import { usePostWithTextCreate } from '@simpd/lib-web';
import React, { SyntheticEvent, useState } from 'react';

export function CreateNewPostCard() {
  const [, setLocation] = useLocation();
  const [content, setContent] = useState('');
  const postWithTextCreate = usePostWithTextCreate();

  const onCreateNewPost = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!content) {
      return;
    }

    const newPost = await postWithTextCreate.execute({ content });
    setLocation(`/posts/${newPost.id}`)
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
        {
          content !== '' && (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
              <Button type="submit">
                Post
              </Button>
            </div>
          )
        }
      </form>
    </Card>
  )
}