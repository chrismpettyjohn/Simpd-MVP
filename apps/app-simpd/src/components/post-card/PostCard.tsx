import DayJS from 'dayjs';
import { Link } from 'wouter';
import React, { useMemo } from 'react';
import { PostCardProps } from './PostCard.types';
import { Container } from '../container/Container';
import { PostShares } from './post-shares/PostShares';
import { PostReactions } from './post-reactions/PostReactions';
import { PostFavorites } from './post-favorites/PostFavorites';
import { TextPostContent } from './text-post-content/TextPostContent';
import { AlbumPostContent } from './album-post-content/AlbumPostContent';
import { ImagePostContent } from './image-post-content/ImagePostContent';
import { AuthorBlockLarge } from '../author-block-large/AuthorBlockLarge';
import { SharedPostContent } from './shared-post-content/SharedPostContent';
import { PostFragment, PostType, PostWithTextFragment } from '@simpd/lib-web';
import { PostCardContent, PostCardElement, PostCardHeader, PostStatsContainer, } from './PostCard.styled';
import { PostComments } from 'components/post-card/post-comments/PostComments';
import { PostMessage } from 'components/post-card/post-message/PostMessage';

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

  if (post.type === PostType.Album) {
    return <AlbumPostContent post={post as any} />
  }

  return null;
}

export function PostCard({ post, hideAuthor = false, hideChildren = false, hideTools = false }: PostCardProps) {
  const postedAt = useMemo(() => DayJS(post.createdAt).fromNow(), [post.createdAt]);
  const postContent = useMemo(() => getPostCardElement(post), [post]);
  return (
    <Link to={`/posts/${post.id}`}>
      <PostCardElement>
        {!hideAuthor && (
          <PostCardHeader>
            <div style={{ display: 'flex' }}>
              <AuthorBlockLarge profile={post.profile} />
            </div>
            <div style={{ display: 'flex' }}>
              {postedAt}
            </div>
          </PostCardHeader>
        )}
        <PostCardContent>
          {postContent}
          {
            !hideTools && !hideChildren && (
              <PostStatsContainer onClick={e => e.stopPropagation()}>
                <Container style={{ justifyContent: 'space-between', paddingTop: 0, paddingBottom: 0 }}>
                  <PostReactions post={post} />
                  <PostFavorites post={post} />
                  <PostComments post={post} />
                  <PostShares post={post} />
                  <PostMessage post={post} />
                </Container>
              </PostStatsContainer>
            )
          }
        </PostCardContent>
      </PostCardElement>
    </Link>
  )
}
