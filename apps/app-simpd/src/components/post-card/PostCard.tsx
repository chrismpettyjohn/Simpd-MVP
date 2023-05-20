import { Link } from 'wouter';
import React, { useMemo } from 'react';
import { PostCardProps } from './PostCard.types';
import { PostFragment, PostType } from '@simpd/lib-web';
import { PostCardContent, PostCardElement, PostStatElement, PostStatsContainer } from './PostCard.styled';
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
          {!hideAuthor && <AuthorBlockLarge profile={post.profile} />}

          {postContent}
          <PostStatsContainer>
            <PostStatElement>
              <h3>20</h3>
              <p>
                <i className="fa fa-thumbs-up" />
              </p>
            </PostStatElement>
            <PostStatElement>
              <h3>20</h3>
              <p>
                <i className="fa fa-heart" />
              </p>
            </PostStatElement>
            <PostStatElement>
              <h3>20</h3>
              <p>
                <i className="fa fa-share" />
              </p>
            </PostStatElement>
          </PostStatsContainer>
        </PostCardContent>
      </PostCardElement>
    </Link>
  )
}

//  <PostCardImage src="https://i.imgur.com/CesvKGF.png" />