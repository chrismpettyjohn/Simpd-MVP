import { Link } from 'wouter';
import React, { useMemo } from 'react';
import { PostCardProps } from './PostCard.types';
import { PostShares } from './post-shares/PostShares';
import { PostFragment, PostType } from '@simpd/lib-web';
import { PostReactions } from './post-reactions/PostReactions';
import { PostFavorites } from './post-favorites/PostFavorites';
import { TextPostContent } from './text-post-content/TextPostContent';
import { AuthorBlockLarge } from 'components/author-block-large/AuthorBlockLarge';
import { PostCardContent, PostCardElement, PostStatsContainer } from './PostCard.styled';

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
          {!hideAuthor && <AuthorBlockLarge profile={post.profile} />}
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

//  <PostCardImage src="https://i.imgur.com/CesvKGF.png" />