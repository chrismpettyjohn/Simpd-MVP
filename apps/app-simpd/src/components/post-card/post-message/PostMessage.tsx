import React from 'react';
import { PostStatElement } from '../PostCard.styled';
import { PostMessageProps } from 'components/post-card/post-message/PostMessage.types';

export function PostMessage({ post }: PostMessageProps) {
  return (
    <PostStatElement>
      <i className="fa fa-comments fa-2x" />
      <h4>message</h4>
    </PostStatElement>
  )
}