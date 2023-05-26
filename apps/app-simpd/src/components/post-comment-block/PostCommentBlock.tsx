import React from 'react';
import { PostCommentBlockProps } from './PostCommentBlock.types';
import { PostCommentBlockContainer } from './PostCommentBlock.sty';
import { CommentReactions } from './comments-reactions/CommentReactions';

export function PostCommentBlock({ postComment }: PostCommentBlockProps) {
  return (
    <PostCommentBlockContainer>
      <div>
        <h4>{postComment.profile.username} said:</h4>
        {postComment.content}
      </div>
      <CommentReactions postComment={postComment} />
    </PostCommentBlockContainer>
  );
}