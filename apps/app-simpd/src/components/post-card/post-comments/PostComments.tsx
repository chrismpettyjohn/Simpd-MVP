import { PostCommentsProps } from '../../../components/post-card/post-comments/PostComments.types';
import React from 'react';
import { PostStatElement } from '../PostCard.styled';

export function PostComments({ }: PostCommentsProps) {
  return (
    <PostStatElement>
      <i className="fa fa-comment fa-2x" />
      <h4>comment</h4>
      <p>
        <small>
          <i className="fa fa-spinner fa-spin" />
        </small>
      </p>
    </PostStatElement>
  )
}