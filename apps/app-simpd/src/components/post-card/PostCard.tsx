import { Link } from 'wouter';
import React, { useMemo } from 'react';
import { PostCardProps } from './PostCard.types';
import { PostShares } from './post-shares/PostShares';
import { PostFragment, PostType, PostWithTextFragment } from '@simpd/lib-web';
import { PostReactions } from './post-reactions/PostReactions';
import { PostFavorites } from './post-favorites/PostFavorites';
import { TextPostContent } from './text-post-content/TextPostContent';
import { ImagePostContent } from './image-post-content/ImagePostContent';
import { AuthorBlockLarge } from '../author-block-large/AuthorBlockLarge';
import { PostCardContent, PostCardElement, PostCardHeader, PostStatsContainer, } from './PostCard.styled';
import { SharedPostContent } from './shared-post-content/SharedPostContent';

const getPostCardElement = (post: PostFragment) => {
  if (post.type === PostType.Text) {
    return <TextPostContent post={post as PostWithTextFragment} />;
  }

  if (post.type === PostType.Image) {
    return <ImagePostContent post={post as any} />;
  }

  if (post.type === PostType.SharedContent) {
    return <SharedPostContent post={post as any} />
  }

  return null;
}

export function PostCard({ post, hideAuthor = false }: PostCardProps) {
  const postContent = useMemo(() => getPostCardElement(post), [post]);
  return (
    <Link to={`/posts/${post.id}`}>
      <PostCardElement>
        {!hideAuthor && (
          <PostCardHeader>
            <AuthorBlockLarge profile={post.profile} />
          </PostCardHeader>
        )}
        <PostCardContent>
          {postContent}
          <PostStatsContainer onClick={e => e.stopPropagation()}>
            <PostReactions post={post} />
            <PostFavorites post={post} />
            <PostShares post={post} />
          </PostStatsContainer>
        </PostCardContent>
      </PostCardElement>
    </Link>
  )
}
