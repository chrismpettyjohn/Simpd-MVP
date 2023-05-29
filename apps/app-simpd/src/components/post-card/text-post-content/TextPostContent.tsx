import React from 'react';
import { PostCardProps } from '../PostCard.types';
import { PostWithTextFragment } from '@simpd/lib-web';
import { PostContent } from '../post-content/PostContent';

export function TextPostContent({ post }: PostCardProps<PostWithTextFragment>) {
  return <PostContent post={post} />
}