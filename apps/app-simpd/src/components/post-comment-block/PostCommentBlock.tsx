import React from 'react';
import { PostCommentBlockProps } from './PostCommentBlock.types';
import { PostCommentBlockContainer } from './PostCommentBlock.sty';

export function PostCommentBlock({ postComment }: PostCommentBlockProps) {
  return (
    <PostCommentBlockContainer>
      <h4>{postComment.profile.username} said:</h4>
      {postComment.content}
    </PostCommentBlockContainer>
  );
}