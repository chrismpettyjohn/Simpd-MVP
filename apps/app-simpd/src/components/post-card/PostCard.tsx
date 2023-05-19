import { Link } from 'wouter';
import React, { useMemo } from 'react';
import { PostCardProps } from './PostCard.types';
import { PostFragment, PostType } from '@simpd/lib-web';
import { PostCardContent, PostCardElement } from './PostCard.styled';
import { TextPostContent } from './text-post-content/TextPostContent';
import { AuthorBlockLarge } from 'components/author-block-large/AuthorBlockLarge';

const getPostCardElement = (post: PostFragment) => {
  if (post.type === PostType.Text) {
    return <TextPostContent post={post} />;
  }

  throw new Error('Unsupported post type');
}

export function PostCard({ post, hideAuthor = false }: PostCardProps) {
  const postContent = useMemo(() => getPostCardElement(post), [post]);
  return (
    <Link to={`/posts/${post.id}`}>
      <PostCardElement>
        <PostCardContent>
          {postContent}
          {!hideAuthor && <AuthorBlockLarge profile={post.profile} />}
        </PostCardContent>
      </PostCardElement>
    </Link>
  )
}

//  <PostCardImage src="https://i.imgur.com/CesvKGF.png" />