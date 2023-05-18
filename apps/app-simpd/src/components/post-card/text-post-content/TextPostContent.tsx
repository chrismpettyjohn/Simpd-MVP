import React from 'react';
import { PostCardProps } from '../PostCard.types';
import { PostCardText } from '../PostCard.styled';
import { PostWithTextFragment } from '@simpd/lib-web';

export function TextPostContent({ post }: PostCardProps<PostWithTextFragment>) {
  return (
    <PostCardText>
      {post.content}
    </PostCardText>
  )
}