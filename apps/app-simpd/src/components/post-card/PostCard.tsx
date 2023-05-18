import React, { useMemo } from 'react';
import { PostCardProps } from './PostCard.types';
import { PostFragment, PostType } from '@simpd/lib-web';
import { PostCardContent, PostCardElement } from './PostCard.styled';
import { TextPostContent } from './text-post-content/TextPostContent';
import { AuthorBlockLarge } from 'components/author-block-large/AuthorBlockLarge';

const getPostCardElement = (post: PostFragment) => {
  console.log(post);
  if (post.type === PostType.Text) {
    return <TextPostContent post={post} />;
  }

  throw new Error('Unsupported post type');
}

export function PostCard({ post }: PostCardProps) {
  const postContent = useMemo(() => getPostCardElement(post), [post]);
  console.log(post)
  return (
    <PostCardElement>
      <PostCardContent>
        {postContent}
        <AuthorBlockLarge profile={post.profile} />
      </PostCardContent>
    </PostCardElement>
  )
}

//  <PostCardImage src="https://i.imgur.com/CesvKGF.png" />