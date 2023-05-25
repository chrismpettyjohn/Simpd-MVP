import { PostCard } from '../PostCard';
import React, { useEffect } from 'react';
import { PostCardProps } from '../PostCard.types';
import { PostCardText } from '../PostCard.styled';
import { PostWithSharedContentFragment, usePostFetchOne } from '@simpd/lib-web';

export function SharedPostContent({ post }: PostCardProps<PostWithSharedContentFragment>) {
  const postFetchOne = usePostFetchOne();

  const onLoadPost = async () => {
    postFetchOne.fetch({ id: post.postID });
  }

  useEffect(() => {
    onLoadPost();
  }, [post]);

  return (
    <>
      {
        postFetchOne.loading && (
          <i className="fa fa-spinner fa-spin" />
        )
      }
      <PostCardText>
        {post.content}
      </PostCardText>


      {
        postFetchOne.data && (
          <>
            <PostCardText>
              <b>{postFetchOne.data.profile.username} said:</b>
            </PostCardText>
            <PostCard post={postFetchOne.data} />
          </>
        )
      }
    </>
  )
}