import { Button } from 'components/button/Button';
import React, { ChangeEvent, useState } from 'react';
import { usePostCommentCreateOne } from '@simpd/lib-web';
import { CreatePostCommentBlockProps } from './CreatePostCommentBlock.types';
import { toast } from 'react-toastify';

export function CreatePostCommentBlock({ postID, onNewComment }: CreatePostCommentBlockProps) {
  const postCommentCreate = usePostCommentCreateOne();
  const [postContent, setPostContent] = useState('');

  const onSetMessageContent = (event: ChangeEvent<any>) => {
    setPostContent(event.target.value ?? '');
  }

  const onSendMessage = async () => {
    const newPostComment = await postCommentCreate.execute({ postID, content: postContent })
    toast.success('🥳 Your comment has been posted!')
    onNewComment(newPostComment);
    setPostContent('');
  }

  return (
    <>
      <textarea
        className="settings-profile-textarea textarea"
        value={postContent}
        onChange={onSetMessageContent}
        placeholder="What do you want to say?"
      />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
        <Button type="button" disabled={postCommentCreate.loading} onClick={onSendMessage}>
          {postCommentCreate.loading ? <i className="fa fa-spinner fa-spin" /> : <>Save</>}
        </Button>
      </div>
    </>
  )
}
