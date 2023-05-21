import React, { useEffect } from 'react';
import { PostCardProps } from '../PostCard.types';
import { PostCardImage, PostCardText } from '../PostCard.styled';
import { PostWithImageFragment, useMediaFetchOne } from '@simpd/lib-web';

export function ImagePostContent({ post }: PostCardProps<PostWithImageFragment>) {
  const mediaFetchOne = useMediaFetchOne();

  const onLoadMedia = async () => {
    mediaFetchOne.fetch({ id: post.mediaID });
  }

  useEffect(() => {
    onLoadMedia();
  }, [post]);

  return (
    <>
      {
        mediaFetchOne.loading && (
          <i className="fa fa-spinner fa-spin" />
        )
      }
      {
        mediaFetchOne.data && (
          <PostCardImage src={mediaFetchOne.data.url} />
        )
      }
      <PostCardText>
        {post.content}
      </PostCardText>
    </>
  )
}