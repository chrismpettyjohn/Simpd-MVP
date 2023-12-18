import { PostCard } from '../PostCard';
import React, { useEffect } from 'react';
import { PostCardProps } from '../PostCard.types';
import { PostCardText } from '../PostCard.styled';
import { PostContent } from '../post-content/PostContent';
import { PostWithSharedContentFragment, usePostFetchOne } from '@simpd/lib-web';

export function SharedPostContent({ post }: PostCardProps<PostWithSharedContentFragment>) {
  const postFetchOne = usePostFetchOne();

  const onLoadPost = async () => {
    postFetchOne.fetch({ id: post.postID });
  }

  useEffect(() => {
    onLoadPost();
  }, [post.id]);

  return (
    <>
      {
        postFetchOne.loading && (
          <i className="fa fa-spinner fa-spin" />
        )
      }
      <PostContent post={post} />
      Shared a post
      {
        postFetchOne.data && (
          <>
            <PostCardText>
              <b>{postFetchOne.data.profile.username} said:</b>
            </PostCardText>
            <PostCard hideAuthor hideChildren post={postFetchOne.data} />
          </>
        )
      }

      {
        !postFetchOne.loading && !postFetchOne.data && (
          <div style={{ fontWeight: 'bold', color: 'red' }}>You can't see this content</div >
        )
      }
    </>
  )
}